import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = resolve(projectRoot, 'dist')
const htmlPath = resolve(distRoot, 'index.html')

if (!existsSync(htmlPath)) {
  console.error('SEO audit failed: run npm run build first.')
  process.exit(1)
}

const html = readFileSync(htmlPath, 'utf8')
const errors = []
const warnings = []

const allTags = (name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? []
const getAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, 'i'))
  return match?.[1] ?? match?.[2] ?? ''
}
const decode = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
const textFrom = (value) => decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
const contentsOf = (name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'gi'))]
  .map((match) => textFrom(match[1]))

const title = contentsOf('title')[0] ?? ''
const metas = allTags('meta')
const description = getAttribute(metas.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'description') ?? '', 'content')
const robots = getAttribute(metas.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'robots') ?? '', 'content')
const canonical = getAttribute(allTags('link').find((tag) => getAttribute(tag, 'rel').toLowerCase() === 'canonical') ?? '', 'href')
const h1s = contentsOf('h1')
const h2s = contentsOf('h2')
const images = allTags('img')
const missingImageAttributes = images.flatMap((tag, index) => {
  const missing = ['src', 'alt', 'width', 'height'].filter((attribute) => !getAttribute(tag, attribute))
  return missing.length ? [{ image: index + 1, missing }] : []
})

const ids = new Set([...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/gi)].map((match) => match[1] ?? match[2]))
const missingAnchorTargets = allTags('a')
  .map((tag) => getAttribute(tag, 'href'))
  .filter((href) => href.startsWith('#') && href.length > 1 && !ids.has(href.slice(1)))

const schemaGraphs = [...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap((match) => {
    try {
      const value = JSON.parse(match[1])
      return value['@graph'] ?? [value]
    } catch {
      errors.push('Structured data contains invalid JSON.')
      return []
    }
  })
const schemaTypes = schemaGraphs.flatMap((item) => Array.isArray(item['@type']) ? item['@type'] : [item['@type']]).filter(Boolean)

const requiredFiles = ['robots.txt', 'sitemap.xml', 'favicon.svg', 'logo.svg', 'site.webmanifest', 'llms.txt']
const missingFiles = requiredFiles.filter((file) => !existsSync(resolve(distRoot, file)))

if (title !== 'Scaffolding Rental & Labour Services in Mumbai | Preeti Scaffolding') errors.push('The homepage title is not the approved title.')
if (title.length < 50 || title.length > 70) warnings.push(`Title length is ${title.length}; target roughly 50-70 characters.`)
if (description.length < 140 || description.length > 160) warnings.push(`Meta description length is ${description.length}; target roughly 140-160 characters.`)
if (canonical !== 'https://www.shuklascaffolding.com/') errors.push('Canonical URL is missing or incorrect.')
if (h1s.length !== 1) errors.push(`Expected one H1, found ${h1s.length}.`)
if (/noindex/i.test(robots)) errors.push('Robots meta contains noindex.')
if (missingImageAttributes.length) errors.push('One or more images are missing src, alt, width, or height attributes.')
if (missingAnchorTargets.length) errors.push(`Missing internal anchor targets: ${[...new Set(missingAnchorTargets)].join(', ')}`)
if (missingFiles.length) errors.push(`Missing production files: ${missingFiles.join(', ')}`)
for (const requiredType of ['WebSite', 'LocalBusiness', 'GeneralContractor', 'Service', 'FAQPage']) {
  if (!schemaTypes.includes(requiredType)) errors.push(`Missing ${requiredType} structured data.`)
}
if (!html.includes('Preeti Scaffolding') || !html.includes('vijayshukla301@gmail.com') || !html.includes('99873 17357')) {
  errors.push('Prerendered business name or contact details are missing.')
}

const report = {
  title,
  titleLength: title.length,
  descriptionLength: description.length,
  canonical,
  h1: h1s,
  h2: h2s,
  imageCount: images.length,
  missingImageAttributes,
  missingAnchorTargets,
  schemaTypes: [...new Set(schemaTypes)],
  serviceSchemaCount: schemaTypes.filter((type) => type === 'Service').length,
  requiredFilesPresent: requiredFiles.filter((file) => !missingFiles.includes(file)),
  prerenderedTextCharacters: textFrom(html).length,
  warnings,
  errors
}

console.log(JSON.stringify(report, null, 2))
process.exit(errors.length ? 1 : 0)

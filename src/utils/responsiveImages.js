const responsiveWidths = [480, 768, 1200];

export const imageVariantPath = (src, width) => src.replace(/(\.[^.]+)$/, `-${width}w$1`);

export const responsiveImageSrcSet = (src, intrinsicWidth) => [
  ...responsiveWidths
    .filter((width) => width < intrinsicWidth)
    .map((width) => `${imageVariantPath(src, width)} ${width}w`),
  `${src} ${intrinsicWidth}w`,
].join(', ');

export const articleImageSizes = '(max-width: 900px) calc(100vw - 32px), 440px';

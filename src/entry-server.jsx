import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import './styles.css';

export function render(pathname = '/') {
  return renderToString(
    <React.StrictMode>
      <App pathname={pathname} />
    </React.StrictMode>
  );
}

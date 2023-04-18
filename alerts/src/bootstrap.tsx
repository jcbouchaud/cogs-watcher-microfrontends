import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el: HTMLElement) => {
  createRoot(el)
    .render(<App />);
}

if (process.env.NODE_ENV == "development") {
  const rootNode = document.getElementById('cogs-alerts');
  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
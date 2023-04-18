import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const rootNode = document.getElementById('cogs-container');
if(rootNode){
  createRoot(rootNode)
    .render(<App />);
}
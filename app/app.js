import React from 'react';
import ReactDom from 'react-dom';
import AppIndex from './index/index.js';
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<AppIndex />,app);
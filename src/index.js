import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import Widget from './components/Widget/Widget';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Widget />
  </React.StrictMode>,
  document.getElementById('root')
);

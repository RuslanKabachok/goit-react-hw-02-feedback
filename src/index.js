import React from 'react';
import ReactDOM from 'react-dom/client';
// import Widget from './components/Widget/Widget';
import App from 'components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Widget /> */}
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Widget /> */}
    <FeedbackOptions
      options={['good', 'neutral', 'bad']}
      onLeaveFeedback={0}
    ></FeedbackOptions>
    <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0} />
  </React.StrictMode>
);

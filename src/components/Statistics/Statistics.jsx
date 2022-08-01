import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  // state = {
  //   good: this.props.good,
  //   neutral: this.props.neutral,
  //   bad: this.props.bad,
  // };

  countTotalFeedback = obj => {
    const total = Object.values(obj);

    const result = total.reduce((sum, amount) => sum + amount);
    return result;
  };

  countPositiveFeedbackPercentage = obj => {
    const goodFeeback = this.props.good;
    const number = this.countTotalFeedback(obj);
    const result = (goodFeeback * 100) / number;
    return result;
  };

  render() {
    return (
      <>
        <p className={css.paragraph}>Statistics</p>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.props.good}</li>
          <li className={css.item}>Neutral: {this.props.neutral}</li>
          <li className={css.item}>Bad: {this.props.bad}</li>
          <li className={css.item}>
            Total: {this.countTotalFeedback(this.props)}
          </li>
          <li className={css.item}>
            Positive feedback:
            {isNaN(this.countPositiveFeedbackPercentage(this.props))
              ? '0'
              : this.countPositiveFeedbackPercentage(this.props).toFixed(2)}
            %
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;

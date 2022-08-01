import React, { Component } from 'react';
import css from './Widget.module.css';

class Widget extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // clickHandler = event => {
  //   const name = event.currentTarget.name;

  //   this.setState(prevState => {
  //     return {
  //       [name]: prevState[name] + 1,
  //     };
  //   });
  // };

  // countTotalFeedback = obj => {
  //   const total = Object.values(obj);

  //   const result = total.reduce((sum, amount) => sum + amount);
  //   return result;
  // };

  // countPositiveFeedbackPercentage = obj => {
  //   const goodFeeback = this.state.good;
  //   const number = this.countTotalFeedback(obj);
  //   const result = (goodFeeback * 100) / number;
  //   return result;
  // };

  render() {
    // const btns = Object.keys(this.state);

    return (
      <div className={css.widget}>
        <p className={css.paragraph}>Please leave a feedback</p>
        {/* {btns.map(btn => (
          <button
            type="button"
            onClick={this.clickHandler}
            name={btn}
            className={css.button}
            key={btn}
          >
            {btn}
          </button>
        ))} */}
        {/* <p className={css.paragraph}>Statistics</p>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.state.good}</li>
          <li className={css.item}>Neutral: {this.state.neutral}</li>
          <li className={css.item}>Bad: {this.state.bad}</li>
          <li className={css.item}>
            Total: {this.countTotalFeedback(this.state)}
          </li>
          <li className={css.item}>
            Positive feedback:
            {isNaN(this.countPositiveFeedbackPercentage(this.state))
              ? '0'
              : this.countPositiveFeedbackPercentage(this.state).toFixed(2)}
            %
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Widget;

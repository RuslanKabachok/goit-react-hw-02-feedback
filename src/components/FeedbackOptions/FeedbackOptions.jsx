import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  clickHandler = event => {
    const name = event.currentTarget.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const btns = this.props.options;

    return (
      <div>
        {btns.map(btn => (
          <button
            type="button"
            onClick={this.clickHandler}
            name={btn}
            className={css.button}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

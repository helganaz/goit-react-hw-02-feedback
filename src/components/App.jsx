import React, { Component } from "react";
// import Feedback from './Feedback';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleBtnClick = type => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = (good + neutral + bad);
    const countPositiveFeedbackPercentage = Math.round((good/countTotalFeedback)*100) || 0
    
      return (
        <div>
          <Section title='Please, leave feedback'>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onHandleBtnClick={this.handleBtnClick}
            />
          </Section>
          
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>

          {/* Всё в одном компоненте */}
          {/* <Feedback
            onHandleBtnClick={this.handleBtnClick}
            options={ ['good', 'neutral', 'bad' ]}
            value={this.state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          /> */}
          </div>
        );
  }
}
    
export default App;

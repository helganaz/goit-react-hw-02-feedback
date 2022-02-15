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

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    });
  }

  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    });
  }

  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
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
              onIncrementGood={this.handleIncrementGood}
              onIncrementNeutral={this.handleIncrementNeutral}
              onIncrementBad={this.handleIncrementBad}
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
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
            value={this.state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          /> */}
          </div>
        );
  }
}
    
export default App;

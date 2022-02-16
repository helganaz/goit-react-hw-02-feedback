import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        total > 0
            ? (
        <ul>
            <li className={s.stat}>Good: {good} </li>
            <li className={s.stat}>Neutral: {neutral} </li>
            <li className={s.stat}>Bad: {bad}</li>
            <li className={s.stat}>Total: {total}</li>
            <li className={s.stat}>Positive feedback: {positivePercentage}%</li>
        </ul>
            ) 
            : <Notification message="No feedback given" />
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
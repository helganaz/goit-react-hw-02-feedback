import s from './Feedback.module.css'

const Feedback = ({onIncrementGood, onIncrementNeutral, onIncrementBad, value, total, positivePercentage }) => {
    
    return (
        <div className={s.container}>
        <h3>Please, leave feedback</h3>
        <div>
            <button className={s.button} onClick={onIncrementGood}>Good</button>
            <button className={s.button} onClick={onIncrementNeutral}>Neutral</button>
            <button className={s.button} onClick={onIncrementBad}>Bad</button>
        </div>
        <h3>Statistics</h3>
        <ul>
            <li>Good: {value.good} </li>
            <li>Neutral: {value.neutral} </li>
            <li>Bad: {value.bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
    )
   
}

export default Feedback;
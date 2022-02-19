import s from './Feedback.module.css'

const Feedback = ({onHandleBtnClick, options, value, total, positivePercentage }) => {
    
    return (
        <div className={s.container}>
        <h3>Please, leave feedback</h3>
            <div>
                 {options.map(option => (
                    <button
                    className={s.button}
                    key={option}
                    onClick={() => onHandleBtnClick(option)}>
                    {option}
                    </button>
                ))}
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
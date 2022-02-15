import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({onIncrementGood, onIncrementNeutral, onIncrementBad}) => {
    
    return (
        <div>
            <button className={s.button} onClick={onIncrementGood}>Good</button>
            <button className={s.button} onClick={onIncrementNeutral}>Neutral</button>
            <button className={s.button} onClick={onIncrementBad}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    onIncrementGood: PropTypes.func.isRequired,
    onIncrementNeutral: PropTypes.func.isRequired,
    onIncrementBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
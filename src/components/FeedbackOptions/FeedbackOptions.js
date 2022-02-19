import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onHandleBtnClick }) {
    return(
    options.map(option => (
        <button
        className={s.button}
        key={option}
        onClick={() => onHandleBtnClick(option)}>
        {option}
        </button>
    )))
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onHandleBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
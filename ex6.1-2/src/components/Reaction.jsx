import { useState } from 'react';
import { PropTypes } from 'prop-types';

import './reaction.css';

const Reaction = (props) => {
  // Stateful component
  const [answer1Count, setAnswer1Count] = useState(0);
  const [answer2Count, setAnswer2Count] = useState(0);

  const incrementAnswer1Count = () => {
    setAnswer1Count(answer1Count + 1);
  };

  return (
    <section className='reaction'>
      <h3>{props.question}</h3>
      <button className='btn' onClick={props.onRemove}>
        Remove
      </button>
      <img src={props.imageUrl} alt='' />
      <div className='buttons-container'>
        <button className='btn' onClick={incrementAnswer1Count}>
          {props.answer1}
        </button>
        <button
          className='btn'
          onClick={() => setAnswer2Count(answer2Count + 1)}
        >
          {props.answer2}
        </button>
      </div>
      <div>Answer 1 valt: {answer1Count}</div>
      <div>Answer 2 valt: {answer2Count}</div>
    </section>
  );
};
export default Reaction;

Reaction.propTypes = {
  question: PropTypes.string.isRequired,
  answer1: PropTypes.any,
  answer2: PropTypes.any,
  imageUrl: PropTypes.string,
  // onRemove: PropTypes.func.isRequired,
};

Reaction.defaultProps = {
  question: 'What is the answer to life?',
  answer1: '42',
  answer2: 'NaN',
  imageUrl: '/assets/images/default-image.png',
};

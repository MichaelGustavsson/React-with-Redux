import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reactionActions } from './store/reactionStore';

const AddReaction = () => {
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [imageUrl, setImageUrl] = useState('/assets/images/default-image.png');

  const dispatch = useDispatch();

  const onAddQuestionHandler = (e) => {
    e.preventDefault();

    const reaction = {
      id: new Date().getTime(),
      question,
      answer1,
      answer2,
      imageUrl,
    };

    console.log(reaction);
    dispatch(reactionActions.addReaction(reaction));
  };

  return (
    <section className='form-container'>
      <form className='form' onSubmit={onAddQuestionHandler}>
        <div className='form-group'>
          <label htmlFor='question'>Question</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type='text'
            name='question'
            id='question'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='answer1'>Answer 1</label>
          <input
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            type='text'
            name='answer1'
            id='answer1'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='answer2'>Answer 2</label>
          <input
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            type='text'
            name='answer2'
            id='answer2'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='imageUrl'>Image URL</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type='text'
            name='imageUrl'
            id='imageUrl'
          />
        </div>
        <div className='buttons-container'>
          <input className='btn' type='submit' value='Add Question' />
          <button className='btn'>Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default AddReaction;

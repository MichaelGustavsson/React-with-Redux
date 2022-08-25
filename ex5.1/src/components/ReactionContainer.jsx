import { useState, useEffect } from 'react';
import Reaction from './Reaction';

import './reaction-container.css';

const ReactionContainer = () => {
  const [reactionList, setReactionList] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [imageUrl, setImageUrl] = useState('/assets/images/default-image.png');

  useEffect(
    () => {
      setReactionList([
        {
          id: 0,
          question: 'Which dressing is tastier?',
          answer1: 'Ranch',
          answer2: 'Vinaigrette',
        },
        {
          id: 1,
          question: 'Which has the better mane?',
          answer1: 'Lion',
          answer2: 'Horse',
          imageUrl: '/assets/images/lion.png',
        },
        {
          id: 2,
          question: 'Which is faster?',
          answer1: 'Cheetah',
          answer2: 'Car',
          imageUrl: '/assets/images/cheetah.png',
        },
        {
          id: 3,
          question: 'Which bird has the heavier legs?',
          answer1: 'Turkey',
          answer2: 'Ostrich',
          imageUrl: '/assets/images/ostrich.png',
        },
      ]);
    },
    [],
    () => {}
  );

  const onAddQuestion = (e) => {
    e.preventDefault();

    const reaction = {
      id: new Date().getTime(),
      question,
      answer1,
      answer2,
      imageUrl,
    };

    setReactionList((currentList) => [...currentList, reaction]);
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <section className='container'>
      <div className='reaction-container'>
        {reactionList.map((reaction) => {
          return <Reaction {...reaction} key={reaction.id} />;
        })}
      </div>
      <hr />
      <section className='form-container'>
        <form className='form' onSubmit={onAddQuestion}>
          <div className='form-group'>
            <label htmlFor='question'>Question</label>
            <input
              value={question}
              onChange={questionHandler}
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
    </section>
  );
};

export default ReactionContainer;

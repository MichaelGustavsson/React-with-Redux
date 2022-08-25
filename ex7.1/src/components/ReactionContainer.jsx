import { useSelector } from 'react-redux';
import Reaction from './Reaction';

import './reaction-container.css';

const ReactionContainer = () => {
  const reactionList = useSelector((state) => state.reactionList);

  return (
    <section className='container'>
      <div className='reaction-container'>
        {reactionList.map((reaction) => {
          return <Reaction {...reaction} key={reaction.id} />;
        })}
      </div>
      <hr />
    </section>
  );
};

export default ReactionContainer;

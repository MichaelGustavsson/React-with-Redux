import { createStore } from 'redux';
import actionConstants from './actionConstants';

const dummyData = [
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
];

const initialState = {
  reactionList: dummyData,
  question: '',
  answer1: '',
  answer2: '',
  imageUrl: '/assets/images/default-image.png',
};

const reactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.ADDREACTION:
      return {
        reactionList: (state.reactionList = [
          ...state.reactionList,
          action.data,
        ]),
        state,
      };
    default:
      return state;
  }
};

const reactionStore = createStore(reactionReducer);

export default reactionStore;

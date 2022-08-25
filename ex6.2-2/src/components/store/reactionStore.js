import { createSlice, configureStore } from '@reduxjs/toolkit';

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
  id: 0,
  question: '',
  answer1: '',
  answer2: '',
  imageUrl: '/assets/images/default-image.png',
};

const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {
    addReaction(state, action) {
      state.reactionList = [...state.reactionList, action.payload];
    },
    removeAction(state, action) {
      const filteredList = state.reactionList.filter(
        (item) => item.id !== action.payload
      );
      state.reactionList = filteredList;
    },
  },
});

const reactionStore = configureStore({
  reducer: reactionSlice.reducer,
});

export const reactionActions = reactionSlice.actions;
export default reactionStore;

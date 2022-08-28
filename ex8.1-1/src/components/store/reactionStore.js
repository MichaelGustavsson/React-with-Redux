import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  reactionList: [],
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
    fetchReactions(state, action) {
      state.reactionList = action.payload;
    },
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

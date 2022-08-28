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

export const getAllReactions = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const url = 'http://localhost:5001/api/v1/reactions';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      return data;
    };

    try {
      const data = await sendRequest();
      dispatch(reactionActions.fetchReactions(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewReaction = (reaction) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const url = 'http://localhost:5001/api/v1/reactions';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reaction),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await sendRequest();
      dispatch(reactionActions.addReaction(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeReaction = (id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const url = `http://localhost:5001/api/v1/reactions/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    };

    try {
      await sendRequest();
      dispatch(reactionActions.removeAction(id));
    } catch (error) {
      console.log(error);
    }
  };
};

const reactionStore = configureStore({
  reducer: reactionSlice.reducer,
});

export const reactionActions = reactionSlice.actions;
export default reactionStore;

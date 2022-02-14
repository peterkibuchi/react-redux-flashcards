import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;

      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },

    addQuizToTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    },
  }
});

export const topicsSelector = state => state.topics.topics;
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

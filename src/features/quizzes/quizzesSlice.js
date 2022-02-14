import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

export const createNewQuiz = (quiz) => {
  const { id, topicId } = quiz;

  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizToTopic({quizId: id, topicId}));
  }
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;

      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      };
    },
  }
});

export const quizzesSelector = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

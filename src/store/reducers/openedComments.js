import { OPEN_COMMENT_REPLIES, CLOSE_COMMENT_REPLIES } from '../actionTypes';

const initialState = [];
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_COMMENT_REPLIES:
      return [...state, payload];
    case CLOSE_COMMENT_REPLIES:
      return state.filter(item => item !== payload);
    default:
      return state;
  }
};

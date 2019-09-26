import { GET_ARTICLES_SUCCES, GET_ARTICLES_LOAD, GET_ARTICLES_FAIL } from '../actionTypes';
const initialState = { data: [], loaded: false, failed: false };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES_LOAD:
      return { ...state, loaded: false };
    case GET_ARTICLES_SUCCES:
      return { ...state, data: payload, loaded: true, failed: false };
    case GET_ARTICLES_FAIL:
      return { ...state, loaded: true, failed: true };
    default:
      return state;
  }
};

import { LIKE_COMMENT, GET_COMMENTS_SUCCES, GET_COMMENTS_LOAD, GET_COMMENTS_FAIL } from '../actionTypes';

const initialState = { data: [], loaded: false, failed: false };

const update = (id, data) =>
  data.map(item =>
    item.id === id ? { ...item, likes: item.likes ? item.likes + 1 : 1 } : { ...item, replies: item.replies.length ? update(id, item.replies) : [] }
  );

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS_LOAD:
      return { ...state, loaded: false };
    case GET_COMMENTS_SUCCES:
      return { ...state, data: payload, loaded: true, failed: false };
    case GET_COMMENTS_FAIL:
      return { ...state, loaded: true, failed: true };
    case LIKE_COMMENT:
      return { ...state, data: update(payload, state.data) };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import Comments from './comments';
import Articles from './articles';
import OpenedComments from './openedComments';

export const Store = (state, action) => RootReducer(state, action);

const RootReducer = combineReducers({ Articles, Comments, OpenedComments });

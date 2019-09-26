import { GetArticleWatcher, GetCommentsWatcher } from './watchers';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([GetArticleWatcher(), GetCommentsWatcher()]);
}
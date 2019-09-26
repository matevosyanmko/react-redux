import { takeEvery } from 'redux-saga/effects';
import { GetCommentsWorker, GetArticleWorker } from './workers';
import { GET_ARTICLES, GET_COMMENTS } from '../actionTypes';

export function* GetCommentsWatcher() {
  yield takeEvery(GET_ARTICLES, GetArticleWorker);
}

export function* GetArticleWatcher() {
  yield takeEvery(GET_COMMENTS, GetCommentsWorker);
}

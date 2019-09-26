import { call, put } from 'redux-saga/effects';
import { articleAPI, commentsAPI } from '../services';
import { GET_ARTICLES_FAIL, GET_ARTICLES_LOAD, GET_ARTICLES_SUCCES, GET_COMMENTS_FAIL, GET_COMMENTS_SUCCES, GET_COMMENTS_LOAD } from '../actionTypes';

export function* GetCommentsWorker() {
  try {
    yield put({ type: GET_COMMENTS_LOAD, payload: { loaded: false } });
    const response = yield call(commentsAPI.get);
    yield put({ type: GET_COMMENTS_SUCCES, payload: response });
  } catch (e) {
    yield put({ type: GET_COMMENTS_FAIL });
  }
}

export function* GetArticleWorker() {
  try {
    yield put({ type: GET_ARTICLES_LOAD });
    const response = yield call(articleAPI.get);
    yield put({ type: GET_ARTICLES_SUCCES, payload: response });
  } catch (e) {
    yield put({ type: GET_ARTICLES_FAIL });
  }
}

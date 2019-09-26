import { LIKE_COMMENT, OPEN_COMMENT_REPLIES, CLOSE_COMMENT_REPLIES, GET_ARTICLES, GET_COMMENTS } from "../actionTypes";

export const GetArticles = { type: GET_ARTICLES }
export const GetComments = { type: GET_COMMENTS }
export const LikeComment = (payload) => ({ type: LIKE_COMMENT, payload })
export const OpenCommentReplies = (payload) => ({ type: OPEN_COMMENT_REPLIES, payload })
export const CloseCommentReplies = payload => ({
  type: CLOSE_COMMENT_REPLIES,
  payload
});
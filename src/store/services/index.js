import { commentsData, articleData } from './data';

export const articleAPI = {
  get: () =>
    new Promise(resolve => {
      setTimeout(() => resolve(articleData), 1000);
    })
};

export const commentsAPI = {
  get: () =>
    new Promise(resolve => {
      setTimeout(() => resolve(commentsData), 1500);
    })
};

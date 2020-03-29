import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchposts = () => dispatch => {
  return function(dispatch) {
    fetch('https://fbn-group.com/api/all')
      .then(response => response.json())
      .then(post =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
};

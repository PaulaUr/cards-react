import * as ActionTypes from "./ActionTypes";
import { BASE_URL, APP_ID } from "../shared/baseUrl";

export const fetchPosts = () => (dispatch) => {
    dispatch(postsListLoading(true));
  
    return fetch(BASE_URL + "/post?limit=10", { headers: { 'app-id': APP_ID} })
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
      .then((response) => response.json())
      .then((data) => dispatch(getPostList(data.data)) )
      .catch(error => dispatch(postsListFailed(error.message)));
  };
  export const postsListLoading = () => ({
    type: ActionTypes.POSTS_LOADING,
  });  

  export const postsListFailed = (errmess) => ({
    type: ActionTypes.POSTS_FAILED,
    payload: errmess,
  });
  
  export const getPostList = (dishes) => ({
    type: ActionTypes.POSTS_LIST,
    payload: dishes,
  });
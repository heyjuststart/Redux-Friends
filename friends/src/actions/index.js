import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const SAVE_FRIEND = 'SAVE_FRIEND';
export const SAVE_FRIEND_SUCCESS = 'SAVE_FRIEND_SUCCESS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  axios
    .get('http://localhost:5000/friends')
    .then(({ data }) =>
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const saveFriend = friend => dispatch => {
  dispatch({ type: SAVE_FRIEND });
  axios
    .post('http://localhost:5000/friends', friend)
    .then(({ data }) => dispatch({ type: SAVE_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(({ data }) => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const deleteFriend = friend => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`http://localhost:5000/friends/${friend.id}`)
    .then(({ data }) => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

import {
  FETCH_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  REQUEST_ERROR,
  SAVE_FRIEND,
  SAVE_FRIEND_SUCCESS,
  UPDATE_FRIEND,
  UPDATE_FRIEND_SUCCESS,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import { connect } from 'react-redux';
import {
  fetchFriends,
  saveFriend,
  updateFriend,
  deleteFriend,
  login
} from './actions';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

export const App = props => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (props.loggedIn && !initialized) {
      props.fetchFriends();
      setInitialized(true);
    }
  });
  if(!props.loggedIn) {
    return (
      <div className="App">
        <h1>Not Logged In :(</h1>
        <LoginForm onSubmit={props.login}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Logged In :)</h1>
        { props.fetchingFriends && <h3>Loading Friends...</h3> }
        <>
        { props.friends.map(f => <Friend friend={f} key={f.id}/>) }
        </>
        <FriendForm onSubmit={props.saveFriend} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.friends
});

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    saveFriend,
    updateFriend,
    deleteFriend,
    login
  }
)(App);

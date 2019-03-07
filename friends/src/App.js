import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  fetchFriends,
  saveFriend,
  updateFriend,
  deleteFriend,
  login,
  loadToken,
  logOut
} from './actions';
import FriendsList from './components/FriendsList';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.loggedIn ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

export const App = props => {
  const [initialized, setInitialized] = useState(false);

  // Effect to load a token if it exists in local storage on initial load
  // It will run once on initial load, then once more when the loggedIn state
  // changes to true.
  useEffect(() => {
    if (!initialized) {
      const token = localStorage.getItem('token');
      if(token && !props.token) {
        props.loadToken(token);
      }
      setInitialized(true);
    }
  });

  return (
    <div className="App">
      <Route
        path="/login"
        render={() => (
          <>
            { props.loggedIn && <Redirect to="/friends" /> }
            <h1>Not Logged In :(</h1>
            <LoginForm onSubmit={props.login} />
          </>
        )}
      />
      <PrivateRoute
        path="/friends"
        component={FriendsList}
        friends={props.friends}
        fetchingFriends={props.fetchingFriends}
        fetchFriends={props.fetchFriends}
        saveFriend={props.saveFriend}
        loggedIn={props.loggedIn}
      />
      <Route
        exact
        path="/"
        render={() =>
          props.loggedIn ? <Redirect to="/friends" /> : <Redirect to="/login" />
        }
      />
      { props.loggedIn && <button onClick={() => {
        localStorage.clear();
        props.logOut();
        props.history.push('/');
      }}>Log Out</button> }
    </div>
  );
};


const mapStateToProps = state => ({
  ...state.friends
});

export default withRouter(connect(
  mapStateToProps,
  {
    fetchFriends,
    saveFriend,
    updateFriend,
    deleteFriend,
    login,
    loadToken,
    logOut
  }
)(App));

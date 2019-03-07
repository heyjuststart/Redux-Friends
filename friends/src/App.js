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
  login
} from './actions';
import FriendsList from './components/FriendsList';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

export const App = props => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (props.loggedIn && !initialized) {
      props.fetchFriends();
      setInitialized(true);
    }
  });
  return (
    <div className="App">
      <Route
        path="/login"
        render={() => (
          <>
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
        saveFriend={props.saveFriend}
      />
      <Route path="/logout" render={() => {
        localStorage.clear();
        return <Redirect to="/" />;
      }} />
      <Route
        exact
        path="/"
        render={() =>
          props.loggedIn ? <Redirect to="/friends" /> : <Redirect to="/login" />
        }
      />
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
    login
  }
)(App));

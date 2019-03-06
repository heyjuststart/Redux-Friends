import React from 'react';
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

export const App = props => {
  // const [initialized, setInitialized] = useState(false);
  // useEffect(() => {
  //   if (!initialized) {
  //     props.fetchFriends();
  //     setInitialized(true);
  //   }
  // });
  if(!props.loggedIn) {
    return (
      <div className="App">
        <h1>Not Logged In Hello</h1>
        <LoginForm onSubmit={props.login}/>
      </div>
    );
  } else {
    return <h1>Logged In Hello</h1>;
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

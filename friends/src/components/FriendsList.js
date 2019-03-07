import React from 'react';
import FriendForm from './FriendForm';
import Friend from './Friend';

const FriendsList = ({ friends, fetchingFriends, saveFriend }) => {
  return (
    <>
      <h1>Logged In :)</h1>
      {fetchingFriends && <h3>Loading Friends...</h3>}
      <>
        {friends.map(f => (
          <Friend friend={f} key={f.id} />
        ))}
      </>
      <FriendForm onSubmit={saveFriend} />
    </>
  );
};

export default FriendsList;

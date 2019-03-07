import React, { useEffect } from 'react';
import FriendForm from './FriendForm';
import Friend from './Friend';

const FriendsList = ({
  fetchFriends,
  friends,
  fetchingFriends,
  saveFriend,
  deleteFriend
}) => {
  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <>
      <h1>Logged In :)</h1>
      {fetchingFriends ? (
        <h3>Loading Friends...</h3>
      ) : (
        <>
          {friends.map(f => (
            <Friend friend={f} key={f.id} deleteFriend={deleteFriend} />
          ))}
        </>
      )}
      <FriendForm onSubmit={saveFriend} />
    </>
  );
};

export default FriendsList;

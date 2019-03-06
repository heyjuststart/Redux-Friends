import React from 'react';

const Friend = props => {
  return (
    <div className="friend">
      {props.friend.name}, {props.friend.gender}
      <button onClick={() => props.deleteFriend}>x</button>
    </div>
  );
};

export default Friend;

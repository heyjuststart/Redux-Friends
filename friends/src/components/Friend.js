import React from 'react';

const Friend = props => {
  return (
    <div className="friend">
      {props.friend.name}, {props.friend.gender}
    </div>
  );
};

export default Friend;

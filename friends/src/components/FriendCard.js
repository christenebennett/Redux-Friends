import React from 'react';

const FriendCard  = props => {
  return (
    <div className="friend-card">
      <h4>{props.name}</h4>
      <div>{props.age}</div>
      <div>{props.email}</div>
    </div>
  )
}

export default FriendCard;
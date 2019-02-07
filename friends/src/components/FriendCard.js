import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions'


class FriendCard extends React.Component {
  constructor(props){
    super(props);
  }

  onDeleteFriend = event => {
    event.preventDefault();
    this.props.deleteFriend(this.props.id)
  }

  render(){
    return (
      <div className="friend-card">
        <h4>{this.props.name}</h4>
        <div>{this.props.age}</div>
        <div>{this.props.email}</div>
        <button type="submit" onClick={this.onDeleteFriend}>Delete Friend</button>
      </div>
    )
  }
}


export default connect(null, { deleteFriend })(FriendCard);
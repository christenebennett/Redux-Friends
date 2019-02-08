import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions'
import EditFriendForm from './EditFriendForm';


class FriendCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }

  onDeleteFriend = event => {
    event.preventDefault();
    this.props.deleteFriend(this.props.id)
  }

  onEditClick = event => {
    event.preventDefault();
    //if this.state.editing is false, set state true, otherwise, set to false
    this.setState(prev => {
      return {
        // this sets editing flag to opposite of its current boolean
        editing: !prev.editing
      }
    })
  }
  render(){
    if (this.state.editing){
      return (
        <div className="friend-card">
        <h4>{this.props.name}</h4>
        <div>{this.props.age}</div>
        <div>{this.props.email}</div>
        <button type="submit" onClick={this.onDeleteFriend}>Delete Friend</button>
        <button onClick={this.onEditClick}>Edit Friend</button>
        
          <EditFriendForm 
          id={this.props.id}
          name={this.props.name}
          age={this.props.age}
          email={this.props.email}/>
        
      </div>
      )
     
    }
    return (
      <div className="friend-card">
        <h4>{this.props.name}</h4>
        <div>{this.props.age}</div>
        <div>{this.props.email}</div>
        <button type="submit" onClick={this.onDeleteFriend}>Delete Friend</button>
        <button onClick={this.onEditClick}>Edit Friend</button>
      
        
      </div>
    )
  }
}


export default connect(null, { deleteFriend })(FriendCard);
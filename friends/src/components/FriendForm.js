import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  onInputChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }

  render(){
    return(
      <div className="friend-form">
        <h3>Add a Friend:</h3>
        <form onSubmit={this.addNewFriend}>
          <input type="text" value={this.state.friend.name} name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" value={this.state.friend.age} name="age" min="13" max="100" placeholder="age" onChange={this.onInputChange}/>
          <input type="email" value={this.state.friend.email} name="email" placeholder="email" onChange={this.onInputChange}/>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFriend })(FriendForm);
import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: '',
        age: null,
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
    // console.log(this.state.friend)
    this.props.addFriend(this.state.friend);
  }

  render(){
    return(
      <div className="friend-form">
        <h3>Add a Friend:</h3>
        <form onSubmit={this.addNewFriend}>
          <input type="text" name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" name="age" min="13" max="100" placeholder="age" onChange={this.onInputChange}/>
          <input type="email" name="email" placeholder="email" onChange={this.onInputChange}/>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFriend })(FriendForm);
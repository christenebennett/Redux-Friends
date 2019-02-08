import React from 'react';
import { connect } from 'react-redux';
import { editFriend } from '../actions';

class EditFriendForm extends React.Component {
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

  editCurrentFriend = event => {
    event.preventDefault();
    // console.log(this.props.name)

    this.props.editFriend(this.state.friend, this.props.id);
    this.setState({
      friend: {
        name: '',
        age: null,
        email: ''
      }
    })
  }

  render(){
    return(
      <div className="friend-form">
        <h3>Edit {this.props.name}</h3>
        <form onSubmit={this.editCurrentFriend}>
          <input type="text" value={this.state.friend.name} name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" value={this.state.friend.age} name="age" min="13" max="100" placeholder="age" onChange={this.onInputChange}/>
          <input type="email" value={this.state.friend.email} name="email" placeholder="email" onChange={this.onInputChange}/>
          <button type="submit">Edit Friend</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { editFriend })(EditFriendForm);
import React from 'react';
import { connect } from 'react-redux';
import { editFriend } from '../actions';

class EditFriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: this.props.name,
        age: this.props.age,
        email: this.props.email
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
    this.props.editFriend(this.state.friend, this.props.id);
  }

  render(){
    return(
      <div className="friend-form-edit">
        <h3>Edit {this.props.name}</h3>
        <form onSubmit={this.editCurrentFriend}>
          <input type="text" defaultValue={this.props.name} name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" defaultValue={this.props.age} name="age" min="13" max="100" placeholder="age" onChange={this.onInputChange}/>
          <input type="email" defaultValue={this.props.email} name="email" placeholder="email" onChange={this.onInputChange}/>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { editFriend })(EditFriendForm);
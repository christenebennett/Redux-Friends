import React from 'react';

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
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  addNewFriend = (event, friend) => {
    event.preventDefault();
    
  }

  render(){
    return(
      <div className="friend-form">
        <h3>Add a Friend:</h3>
        <form>
          <input type="text" name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" name="age" min="13" max="100" placeholder="age" onChange={this.onInputChange}/>
          <input type="email" name="email" placeholder="email" onChange={this.onInputChange}/>
          <button>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;
import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {

  componentDidMount() {
    // call function fetch data
    this.props.fetchData();
  }

  render(){
    if (this.props.loading){
      return <h2>LOADING FRIENDS....</h2>
    }
    return (

      <div className="friends-list">
        <h2>Friends:</h2>
        <div className="friends-list-friends">
          {this.props.friends.map(friend => {
            return (
              <FriendCard 
                key={friend.id} 
                id={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email} />
            )
          })}
        </div>
        
      </div>
    
    )
  }
}

const mstp = state => {
  return {
    friends: state.friends,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mstp, { fetchData: fetchData })(FriendsList);
import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class FriendsList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // call function fetch data
    this.props.fetchData();
  }

  render(){
    if (this.props.loading){
      return <h2>LOADING FRIENDS....</h2>
    }
    return(
      <div>
        {this.props.friends.map(friend => {
          return <div>{friend}</div>;
        })}
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
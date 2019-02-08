import React, { Component } from 'react';

import './App.css';
import FriendList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;

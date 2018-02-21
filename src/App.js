import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAction from './redux/actions';
import Store from './redux/store';
import Reducer from './redux/reducers';
import LeftNav from './components/leftNav/LeftNav';
import MainBody from './components/mainBody/MainBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftNav />
        <MainBody />
      </div>
    );
  }
}

export default App;

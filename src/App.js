import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Test from './components/test-component/test';
class App extends Component {
  
  render() {
    return (
      <div className='app-wrapper'>
        <Test/>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({}),
)(App);

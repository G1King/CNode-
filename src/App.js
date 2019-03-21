import React, { Component } from 'react';
import Router from './router/Router';
import Header from '../src/components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="wrap">
      <Header/>
      <main className="main">
      <Router></Router>
      </main>
      </div>
    );
  }
}

export default App;

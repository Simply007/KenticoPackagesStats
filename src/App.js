import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home'

class App extends Component {
  


  render() {
    return (
      <div className="app">
          <Header/>
          <Home/>
          <Footer/>
      </div>
    );
  }
}

export default App;

 import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContainer  from './container/Main/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <MainContainer />
        
        <Footer />
          
      </div>
    );
  }
}

export default App;

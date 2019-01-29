 import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContainer  from './container/Main/MainContainer';
import Sidebar from './components/sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <div id="wrapper">
          <Sidebar></Sidebar>
            <MainContainer />
        </div>
        
        <Footer />
          
      </div>
    );
  }
}

export default App;

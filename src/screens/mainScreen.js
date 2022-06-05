import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {Route} from 'react-router-dom';
import HomeScreen from './homeScreen';

class MainScreen extends Component {
  render() {
    return (
      <div>
          <Header></Header>
          <main className='main'>
            <Route path="/" exact component={HomeScreen}/>
          </main>
          <Footer></Footer>
      </div>
    )
  }
}

export default MainScreen;

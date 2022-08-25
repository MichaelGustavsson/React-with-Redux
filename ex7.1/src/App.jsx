import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import reactionStore from './components/store/reactionStore';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactionContainer from './components/ReactionContainer';
import AddReaction from './components/AddReaction';
import Navbar from './components/Navbar';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={reactionStore}>
          <Navbar />
          <Header />
          <Routes>
            <Route path='/' element={<ReactionContainer />} />
            <Route path='/add' element={<AddReaction />} />
          </Routes>
          <Footer />
        </Provider>
      </>
    );
  }
}

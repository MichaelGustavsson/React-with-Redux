import { Component, Fragment } from 'react';

import { Provider } from 'react-redux';
import reactionStore from './components/store/reactionStore';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactionContainer from './components/ReactionContainer';
import Navbar from './components/Navbar';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={reactionStore}>
          <Navbar />
          <Header />
          <ReactionContainer />
          <Footer />
        </Provider>
      </>
    );
  }
}

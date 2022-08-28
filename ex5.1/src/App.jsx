import { Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ReactionContainer from './components/ReactionContainer';
import Navbar from './components/Navbar';

import './app.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <ReactionContainer />
      <Footer />
    </Fragment>
  );
};

export default App;

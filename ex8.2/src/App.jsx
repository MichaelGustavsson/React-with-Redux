import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getAllReactions } from './components/store/reactionStore';

import Header from './components/Header';
import Footer from './components/Footer';
import ReactionContainer from './components/ReactionContainer';
import AddReaction from './components/AddReaction';
import ReactionDetail from './components/ReactionDetail';
import Navbar from './components/Navbar';

import './app.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReactions());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<ReactionContainer />} />
        <Route path='/add' element={<AddReaction />} />
        <Route path='/reactions/:id' element={<ReactionDetail />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;

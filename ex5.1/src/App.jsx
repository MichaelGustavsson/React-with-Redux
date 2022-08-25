import { Component, Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ReactionContainer from './components/ReactionContainer';
import Navbar from './components/Navbar';

import './app.css';

// Det gamla sättet att skapa komponenter...
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <ReactionContainer />
        <Footer />
      </>
    );
  }
}

/* FUNKTIONELLA KOMPONENTER */
// 1.
// export default function App() {
//   return (
//     <>
//       <Header />
//       <ReactionContainer />
//       <Footer />
//     </>
//   );
// }

// ARROW FUNCTION...
// 2.
// const App = () => {
// return (
//       <>
//         <Header />
//         <ReactionContainer />
//         <Footer />
//       </>
//     );
// };
// export default App;

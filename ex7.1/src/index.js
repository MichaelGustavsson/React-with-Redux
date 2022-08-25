import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const reactionApp = ReactDOM.createRoot(document.querySelector('#root'));

reactionApp.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

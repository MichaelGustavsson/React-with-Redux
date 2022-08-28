import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import reactionStore from './components/store/reactionStore';

import App from './App';

const reactionApp = ReactDOM.createRoot(document.querySelector('#root'));

reactionApp.render(
  <BrowserRouter>
    <Provider store={reactionStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

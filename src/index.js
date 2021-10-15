import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';

// -- all state (and state changing logic) lives in store
const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    {/*Provider sends global state to other components*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

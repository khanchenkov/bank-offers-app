import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {setupStore} from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

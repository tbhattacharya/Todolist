import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux'


let store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
  ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

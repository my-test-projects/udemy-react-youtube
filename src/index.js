import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import videoDetailReducer from './Video/reducers/VideoDetailsReducer';
import App from './App/components/App';

import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';


const appReducer = combineReducers({
    selectedVideo: videoDetailReducer
});

let store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import authReducer from './store/reducers/auth';

import index from './styles/index.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';


const rootReducer = combineReducers ( {
    auth:     authReducer,

} );

const logger = store => {
    return next => {
        return action => {
            const result = next ( action );
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore ( rootReducer, composeEnhancers ( applyMiddleware ( logger, thunk ) ) );

const app = (
    <Provider store={store}>
        <HashRouter>
            <App   />
        </HashRouter>
    </Provider>
);

ReactDOM.render ( app, document.getElementById ( 'root' ) );
registerServiceWorker ();

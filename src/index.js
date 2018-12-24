import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import authReducer from './store/reducers/auth';
import supplierReducer from './store/reducers/suppliers';
import bridegroomReducer from './store/reducers/bridegroom'
import index from './styles/index.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/index.scss';


const rootReducer = combineReducers({
    auth: authReducer,
    suppliers:supplierReducer,
    bridegroom:bridegroomReducer

});

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
    <CookiesProvider>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </CookiesProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

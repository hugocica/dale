import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import './assets/css/app.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';

import App from './App';
import store from "./redux/store";

const History = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={History}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import Login from 'components/Login/Login'


ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Login" component={Login}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));

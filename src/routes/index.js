import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../views/Home';
import Login from '../views/Login';
import Registro from '../views/Registro';
import PageNotFound from '../views/PageNotFound';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/login" component={Login} /> 
                <Route exact path="/registrarse" component={Registro} /> 
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes;
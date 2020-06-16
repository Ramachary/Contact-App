
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PageNotFound from '../Container/Pagenotfound';
import withHeaderWrapper from '../Component/Comman/Header/withHeaderWrapper';
import Home from '../Container/Home';
import Contact from '../Container/Contact';
import AddEditContact from '../Container/Contact/AddEditNew';

const routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    // component={withHeaderWrapper(Home)} />
                    component={Home} />
                <Route
                    exact
                    path="/contact"
                    component={withHeaderWrapper(Contact)} />
                <Route
                    exact
                    path="/contact/new"
                    component={withHeaderWrapper(AddEditContact)} />
                <Route
                    exact
                    path="/contact/edit/:id"
                    component={withHeaderWrapper(AddEditContact)} />
                <Route
                    path=""
                    component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default routes;
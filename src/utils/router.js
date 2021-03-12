import React, {useContext} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from "../pages/home/HomePage";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

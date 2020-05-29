import React from 'react';
import { history } from './helpers';
import { Route, Router, Switch, Redirect } from 'react-router';
import { PropertiesPageConnected } from './pages';

export enum routerUri {
    properties = '/properties',
}

export const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path={routerUri.properties}
                    component={PropertiesPageConnected}
                    exact
                />
                <Route path='*'>
                    <Redirect to={routerUri.properties} />
                </Route>
            </Switch>
        </Router>
    );
};

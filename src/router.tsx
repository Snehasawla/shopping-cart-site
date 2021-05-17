import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Auth }from './screens';
import  Dashboard  from './screens/components/dashboard';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Dashboard }/>
            <Route path='/auth' component={Auth} />
            <Route path='*' exact render={() => (
                <div>
                    <h1>Page not found</h1>
                </div>
            )} />
        </Switch>
    );
};

export default AppRouter;
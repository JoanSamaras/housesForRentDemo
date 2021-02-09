import React, { FC, memo } from 'react';
import Home from 'pages/Home';
import Catalogue from 'pages/Catalogue';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path={[ '/', '/home' ]}><Home /></Route>
            <Route path="/catalogue"><Catalogue /></Route>
        </Switch>
    </Router>
);

export default AppRouter;

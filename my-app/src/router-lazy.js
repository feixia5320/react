import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MySelect = lazy(() => import('./component/form/1-form2'));
const SignUpDialog = lazy(() => import('./component/form/3-extend'));

const RouterLazy = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/a" component={MySelect} />
                <Route path="/b" component={SignUpDialog} />
            </Switch>
        </Suspense>
    </Router>
);
export default RouterLazy;
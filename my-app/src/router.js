import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MySelect from './component/form/2-select'
import Reservation from './component/form/1-form2'

const MyRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/c" component={MySelect}/>
            <Route exact path="/d" component={Reservation}/>
        </Switch>
    </HashRouter>
);

export default MyRouter;
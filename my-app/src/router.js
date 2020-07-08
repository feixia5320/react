import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Reservation from './component/form/1-form2'
import MySelect from './component/form/2-select'
import SignUpDialog from './component/form/3-extend'
import StatusCalculator from './component/form/4-statetisheng'
import StatusOut from './component/form/5-state'
import ContextApp0 from './component/form/6-context'

import ContextApp1 from './component/context/app'
import ContextApp2 from './component/context2/app'
import ContextApp3 from './component/context-multi/app'

const MyRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/select" component={MySelect}/>
            <Route exact path="/multform" component={Reservation}/>
            <Route exact path="/combine" component={SignUpDialog}/>
            <Route exact path="/status" component={StatusCalculator}/>
            <Route exact path="/status2" component={StatusOut}/>
            <Route exact path="/cont0" component={ContextApp0}/>
            <Route exact path="/cont1" component={ContextApp1}/>
            <Route exact path="/cont2" component={ContextApp2}/>
            <Route exact path="/cont3" component={ContextApp3}/>
        </Switch>
    </HashRouter>
);

export default MyRouter;
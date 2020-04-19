import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MySelect from './component/form/2-select'
import Reservation from './component/form/1-form2'
import ContextApp1 from './component/form/6-context'
import ContextApp2 from './component/context/app'
import ContextApp3 from './component/context2/app'
import ContextApp4 from './component/context-multi/app'

const MyRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/c" component={MySelect}/>
            <Route exact path="/d" component={Reservation}/>
            <Route exact path="/cont1" component={ContextApp1}/>
            <Route exact path="/cont2" component={ContextApp2}/>
            <Route exact path="/cont3" component={ContextApp3}/>
            <Route exact path="/cont4" component={ContextApp4}/>
            
        </Switch>
    </HashRouter>
);

export default MyRouter;
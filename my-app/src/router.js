import React from 'react';
import {BrowserRouter as Router, Redirect, HashRouter, Route, Switch} from 'react-router-dom';

import App from "./App2";
import Reservation from './component/form/1-form2'
import MySelect from './component/form/2-select'
import SignUpDialog from './component/form/3-extend'
import StatusCalculator from './component/form/4-statetisheng'
import StatusOut from './component/form/5-state'
import ContextApp0 from './component/form/6-context'
import RouterParams from './component/form/7-router'

import ContextApp1 from './component/context/app'
import ContextApp2 from './component/context2/app'
import ContextApp3 from './component/context-multi/app'
import Ref1 from "./component/ref/1-ref";

import WithMemo from './component/hook/useMemo'
import WithCallback from './component/hook/useCallback'
import WithCallback2 from './component/hook/useCallback2'

import ReduxApp from './component/redux/index'

const MyRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/select" component={MySelect}/>
            <Route exact path="/multform/:id" component={Reservation}/>
            <Route exact path="/combine" component={SignUpDialog}/>
            <Route exact path="/status" component={StatusCalculator}/>
            <Route exact path="/status2" component={StatusOut}/>
            <Route exact path="/cont0" component={ContextApp0}/>
            <Route exact path="/router/:id" component={RouterParams}/>
            <Route exact path="/cont1" component={ContextApp1}/>
            <Route exact path="/cont2" component={ContextApp2}/>
            <Route exact path="/cont3" component={ContextApp3}/>
            <Route exact path="/ref1" component={Ref1}/>
            <Route exact path="/usememo" component={WithMemo}/>
            <Route exact path="/usecallback" component={WithCallback}/>
            <Route exact path="/usecallback2" component={WithCallback2}/>
            <Route exact path="/redux" component={ReduxApp}/>
        </Switch>
    </HashRouter>
);
/**
 * 其他写法
 */
const MyRouter3 = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/select" component={MySelect}/>
            <Route exact path="/multform/:id" component={Reservation}/>
            <Route exact path="/combine" component={SignUpDialog}/>
            <Route exact path="/status" component={StatusCalculator}/>
            <Route exact path="/status2" component={StatusOut}/>
            <Route exact path="/cont0" component={ContextApp0}/>
            <Route exact path="/cont1" component={ContextApp1}/>
            <Route exact path="/cont2" component={ContextApp2}/>
            <Route exact path="/cont3" component={ContextApp3}/>
            <Route exact path="/ref1" component={Ref1}/>
        </Switch>
    </HashRouter>
);
// ok
// 嵌套路由
// 重定向路由
const MyRouter2 = () => {
    return (
        <Router>
            <Route path="/multform" component={Reservation}/>
            <Route path="/select" render={() => (
                <MySelect>
                    <Route path="/select/cont0" component={ContextApp0}/>
                </MySelect>
            )} />
            <Route path="/" render={() => (
                <Redirect to='/select' />
            )} />
        </Router>
    )
}

export default MyRouter;
import React from "react";
import {BrowserRouter as Router, Redirect, HashRouter, Route, Switch} from 'react-router-dom';
import { hashHistory } from 'react-router'
// import { IndexRoute } from "react-router";

import App from "./App2";
import MyForm from "./component/form/1-form2";
import MySelect from "./component/form/2-select";
import SignUpDialog from "./component/form/3-extend";
import StatusCalculator from "./component/form/4-statetisheng";
import StatusOut from "./component/form/5-state";
import ContextApp0 from "./component/form/6-context";

import ContextApp1 from "./component/context/app";
import ContextApp2 from "./component/context2/app";
import ContextApp3 from "./component/context-multi/app";
import Ref1 from "./component/ref/1-ref";

const MyRouter = () => {
  return (
    <Router>
        <Route path="/" component={App}>
          <Route path="select" component={MySelect} />
          <Route path="multform" component={MyForm}>
              <Route path="combine/:id" component={SignUpDialog} />
          </Route>
        </Route>
    </Router>
  )
}

const MyRouter2 = () => {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/multform" component={MyForm} />
      <Route path="/select" component={MySelect} />
      <Route path="/combine" component={SignUpDialog}/>
      <Route path="/status" component={StatusCalculator}/>
      <Route path="/status2" component={StatusOut}/>
      <Route path="/cont0" component={ContextApp0}/>
      <Route path="/cont1" component={ContextApp1}/>
      <Route path="/cont2" component={ContextApp2}/>
      <Route path="/cont3" component={ContextApp3}/>
      <Route path="/ref1" component={Ref1}/>
    </Router>
  );
};

export default MyRouter2;

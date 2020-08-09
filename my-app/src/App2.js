import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { createHashHistory } from "history";
const history = createHashHistory();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick() {
    history.push("/status");
  }
  render() {
    let arr = [
      "/multform",
      "/select",
      "/combine",
      "/status",
      "/status2",
      "/cont0",
      "/cont1",
      "/cont2",
      "/cont3",
      "/ref1",
      "/router/13",
      "/usememo",
      "/usecallback",
      "/usecallback2",
      "/redux",
    ];
    return (
      <div>
        <h1>App</h1>
        <ul className="navbar">
          {arr.map((item) => {
            return (
              <li>
                <Link to={item} key={item}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={this.btnClick}>to status</button>
        <h2>子路由</h2>
        {/*
        子路由
        */}
        {this.props.children}
      </div>
    );
  }
}

export default App;

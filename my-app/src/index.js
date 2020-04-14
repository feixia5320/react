import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// eslint-disable-next-line
import Game from "./component/game/game";
import MySelect from './component/form/select'
import Reservation from './component/form/form2'

let arr = [
  <Game />,
  <MySelect />,
  <Reservation />,
]

ReactDOM.render(
  arr,
  document.getElementById('root')
);

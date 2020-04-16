import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './router'
// import RouterLazy from './router-lazy'

ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);

/*
// eslint-disable-next-line
import Game from "./component/game/game";
import MySelect from './component/form/2-select'
import Reservation from './component/form/1-form2'
import Calculator from './component/form/4-statetisheng'
import SignUpDialog from './component/form/3-extend'
import {FilterableProductTable, PRODUCTS} from './component/form/5-state'

let arr = [
  <Game />,
  <MySelect />,
  <Reservation />,
  <Calculator />,
  <SignUpDialog />,
  <FilterableProductTable products={PRODUCTS} />,
]

ReactDOM.render(
  arr,
  document.getElementById('root')
);
*/
import React from 'react';
import './game.css'

function Square(props) {
    if (props.highlight) {
      return (
        <button className="square" onClick={props.onClick} style={{ color: 'red' }}>
          {props.value}
        </button>
      );
    } else {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square key={i} value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          highlight={this.props.line.includes(i)}
        />
      )
    }
    renderSquare2() {
      let rows = [];
      for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = i * 3; j < i * 3 + 3; j++) {
          row.push(this.renderSquare(j))
        }
        rows.push(<div key={i} className="board-row">{row}</div>);
      }
      return (
        <div>
          {rows}
        </div>
      )
    }
  
    render() {
      return (this.renderSquare2());
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: [] };
  }
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          x: null,
          y: null
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares).winner || squares[i]) {
        return;
      }
      let y = Math.floor(i / 3) + 1;
      let x = i % 3 + 1;
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          x: x,
          y: y
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        sort: true
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
  
    getStyle(index) {
      return index === this.state.stepNumber ? 'stepcolor' : null;
    }
  
    toggleSort() {
      this.setState({
        sort: !this.state.sort,
      })
    }
    render() {
      let history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares).winner;
      const line = calculateWinner(current.squares).line;
      if (!this.state.sort) {
        history = this.state.history.slice();
        history.reverse();
      }
  
      const moves = history.map((step, move) => {
        let desc = 'x:' + step.x + ";y:" + step.y;
        return (
          <li key={move} className={this.getStyle(move)}>
            <button style={{ width: '80px' }} onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              line={line}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol style={{ listStyle: 'none' }}>{moves}</ol>
          </div>
          <button className="revertbtn" onClick={() => { this.toggleSort() }}>revert</button>
        </div>
      );
    }
  }
  
  export default Game;
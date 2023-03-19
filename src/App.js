import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      
      <header className="App-header">
        <Game />
           <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>     
      </header>      
      
    </div>
  );
}

class Square extends React.Component {
  
  render() {
    return (
      
      <button className="square" onClick={this.props.funcProps1}>
        {this.props.valProps1}
      </button>
    );
  }
}

class Board extends React.Component {

  handleClick(i) {
    console.log('i : ' + i);
    let squares = this.state.squares.slice();
    squares[i] = (this.state.xIsNext === true) ? 'X' : 'O';
    this.setState({
      squares : squares,
      xIsNext : !this.state.xIsNext,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      xIsNext : true,
    };
  }
  renderSquare(i) {
    return <Square valProps1={this.state.squares[i]} funcProps1={()=>this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext === true ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


export default App;

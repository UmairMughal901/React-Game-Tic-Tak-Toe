import React from 'react';
import Square from "./Square";



class Board extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      squares : Array(9).fill(null),
      xIsNext : true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? ':X' : ':O';
    this.setState({squares: squares,
      xIsNext : !this.state.xIsNext,
    });
    
  }

  understandBox(i) {
    return <Square 
    value={this.state.squares[i]}
    onClick ={() => this.handleClick(i)} />
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    
    return (

      
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.understandBox(0)}
          {this.understandBox(1)}
          {this.understandBox(2)}
        </div>
        <div className="board-row">
          {this.understandBox(3)}
          {this.understandBox(4)}
          {this.understandBox(5)}
        </div>
        <div className="board-row">
          {this.understandBox(6)}
          {this.understandBox(7)}
          {this.understandBox(8)}
        </div>
      </div>
    );
  }
}

export default Board;
import React from 'react';
import Square from "./Square";



class Board extends React.Component {
  understandBox(i) {
    return <Square value={i} />
  }
  render() {
    const status = 'Next player: X';
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
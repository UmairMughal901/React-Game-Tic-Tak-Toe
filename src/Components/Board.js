import React from 'react';
import Square from "./Square";

class Board extends React.Component{
    renderBox(i){
        return <Square value={i}/>
    }
    render(){
        const status = 'Next player: X';
        return(
            <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div className="board-row">
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div className="board-row">
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
        );
    }
}

export default Board;
import React from "react";
import Square from './Square'
import "./Square.css"
import calculateWinner from "./calculateWinner";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  /**
   * Assigns all square values to a new array
   * Ignores click if there is already a winner declared, or the field is already occupied.
   * Otherwise, changes status (symbol) of the specified square in the new array.
   * Changes state of squares and xIsNext.
   * @param i: number
   */
  handleClick = i => {
    const newSquares = this.state.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
    })
  }

  /**
   * Renders individual square with value from specified square
   * @param i
   * @returns {JSX.Element}
   */
  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  /**
   * Checks winner status and updates nextTurnStatus.
   * Returns 3x3 Square components
   * @returns {JSX.Element}
   */
  render() {
    const winner = calculateWinner(this.state.squares);
    let nextTurnStatus;
    if (winner) {
      nextTurnStatus = 'Winner ' + winner;
    } else {
      nextTurnStatus = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      <div>
        <div className="status">{nextTurnStatus}</div>
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

export default Board;
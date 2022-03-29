import React from "react";
import './Square.css';

class Square extends React.Component {

  /**
   * Renders button component
   * @returns {JSX.Element}
   */
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
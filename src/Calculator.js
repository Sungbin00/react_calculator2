import { Component } from "react";

class Calculator extends Component {
    render() {
      return (
        <div className={this.props.class} onClick={this.props.event}>{this.props.element}</div>
      );
    }
  }

export default Calculator;
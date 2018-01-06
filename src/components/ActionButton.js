import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    return (
      <button className="actionButton">
        {this.props.text}
      </button>
    );
  }
}

export default ActionButton;


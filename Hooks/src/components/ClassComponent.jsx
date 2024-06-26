// ClassComponent.jsx
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onChangeHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onChangeHandler}>count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassComponent;

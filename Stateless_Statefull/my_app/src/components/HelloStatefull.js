import React, { Component } from 'react';

class HelloStatefull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Stateful World!"
    };
  }
  
  render() {
    return <h1>{this.state.message}</h1>
  }
}

export default HelloStatefull;

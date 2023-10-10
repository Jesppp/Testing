import React, { Component } from 'react';

class Teller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //Starter telleren på 0
    };
  }

  increment = () => {  //Lager to pilfunksjoner for å øke eller minske telleren.
    this.setState({ count: this.state.count + 1});
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1});
  }

  render() { //Lager to knappefunksjoner som bruker increment og decrement pilfunksjonene over når de blir trykket på.
    return (
      <div>
        <p> Current count: {this.state.count} </p>
        <button onClick={this.increment}>Increase the counter</button> 
        <button onClick={this.decrement}>Decrease the counter</button>
      </div>
    );
  }
}

export default Counter;

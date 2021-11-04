import React, { Component } from "react";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <section className="app">
        <input type="button" value="+" onClick={this.state.counter} />
        <input type="button" value="-" onClick={this.state.counter} />
        <p>{this.state.counter}</p>
      </section>
    );
  }
}

export default App;

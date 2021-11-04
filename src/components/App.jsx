import React, { Component } from "react";
class App extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <section className="app">
        <section className="app-buttons">
          <input type="button" value="+" onClick={this.state.counter} />
          <input type="button" value="-" onClick={this.state.counter} />
          <p>{this.state.counter}</p>
        </section>
      </section>
    );
  }
}

export default App;

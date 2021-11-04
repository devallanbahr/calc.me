import React, { Component } from "react";
import "../stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.sectionAppContent = React.createRef();

    this.state = {
      counter: 0,
    };
  }

  render() {
    const setOrNotVisible = () => {
      if (this.sectionAppContent.current.style.display === "inline-block")
        this.sectionAppContent.current.style.display = "none";
      else {
        this.sectionAppContent.current.style.display = "inline-block";
      }
    };
    return (
      <section className="app">
        <section className="app-input">
          <input
            className="app-show"
            onClick={setOrNotVisible}
            type="button"
            value="Show/Hide"
          />
        </section>
        <section ref={this.sectionAppContent} className="app-content">
          <h2>{this.state.counter}</h2>
          <input type="text" ref={this.inputText} />
        </section>
      </section>
    );
  }
}

export default App;

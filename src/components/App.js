import React, { Component } from "react";
import "../stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.sectionAppContent = React.createRef();
    this.inputText = React.createRef();

    this.state = {
      input: 0,
    };
  }

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ input: this.inputText.current.value });
      console.log(this.state.input);
    };
    return (
      <section className="app">
        <section ref={this.sectionAppContent} className="app-content">
          <input
            onChange={handleSubmit}
            type="number"
            readOnly={true}
            ref={this.inputText}
            value={0}
          />
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
          <input type="button"></input>
        </section>
      </section>
    );
  }
}

export default App;

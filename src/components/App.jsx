import React, { Component } from "react";
import "../stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.sectionAppContent = React.createRef();
    this.inputText = React.createRef();

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
    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ counter: this.inputText.current.value });
    };
    return (
      <section className="app">
        <section ref={this.sectionAppContent} className="app-content">
          <input onChange={handleSubmit} type="text" ref={this.inputText} />
        </section>
      </section>
    );
  }
}

export default App;

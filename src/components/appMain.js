import React, { Component } from "react";
import { Container, Main, AppMain, Buttons } from "../stylesheets/appStyle";

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
      <AppMain>
        <Main />
        <Container ref={this.sectionAppContent} className="app-content">
          <input
            onChange={handleSubmit}
            type="number"
            readOnly={true}
            ref={this.inputText}
            value={0}
          />
          <Buttons>
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
            <input type="button"></input>
            <input type="button"></input>
            <input type="button"></input>
            <input type="button"></input>
            <input type="button"></input>
            <input type="button"></input>
          </Buttons>
        </Container>
      </AppMain>
    );
  }
}

export default App;

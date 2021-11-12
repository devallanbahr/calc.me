import React, { Component } from "react";
import {
  Container,
  Main,
  AppMain,
  Buttons,
  Button,
  Input,
} from "../stylesheets/appStyle";

class App extends Component {
  constructor(props) {
    super(props);

    this.inputText = React.createRef();
    this.Button = React.createRef();
    this.state = {
      inputText: 0,
    };
  }

  render() {
    return (
      <AppMain>
        <Main />
        <Container>
          <Input type="text" readOnly ref={this.inputText} placeholder={0} />
          <Buttons>
            <Button ref={this.Button} type="button" value="1" />
            <Button ref={this.Button} type="button" value="2" />
            <Button ref={this.Button} type="button" value="3" />
            <Button ref={this.Button} type="button" value="+" />
            <Button ref={this.Button} type="button" value="4" />
            <Button ref={this.Button} type="button" value="5" />
            <Button ref={this.Button} type="button" value="6" />
            <Button ref={this.Button} type="button" value="-" />
            <Button ref={this.Button} type="button" value="7" />
            <Button ref={this.Button} type="button" value="8" />
            <Button ref={this.Button} type="button" value="9" />
            <Button ref={this.Button} type="button" value="x" />
            <Button ref={this.Button} type="button" value="CE" />
            <Button ref={this.Button} type="button" value="0" />
            <Button ref={this.Button} type="button" value="." />
            <Button ref={this.Button} type="button" value="=" />
          </Buttons>
        </Container>
      </AppMain>
    );
  }
}

export default App;

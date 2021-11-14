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
  }
  render() {
    const Insert = (e) => {
      if (e.target.value === "CE") {
        this.inputText.current.value = "";
      } else if (e.target.value === "=") {
        if (this.inputText.current.value == 0) {
          this.inputText.current.value = "";
        } else {
          var res = parseInt(eval(this.inputText.current.value));
          this.inputText.current.value = res;
        }
      } else {
        this.inputText.current.value += e.target.value;
      }
    };

    return (
      <AppMain>
        <Main />
        <Container>
          <Input type="text" readOnly ref={this.inputText} placeholder={0} />
          <Buttons>
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"1"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"2"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"3"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"+"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"4"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"5"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"6"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"-"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"7"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"8"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"9"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"*"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"CE"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"0"}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"="}
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value={"/"}
            />
          </Buttons>
        </Container>
      </AppMain>
    );
  }
}

export default App;

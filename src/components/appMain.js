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
    const Equal = () => {
      let res = Math.fround(parseInt(this.inputText.current.value) * 1);
      this.inputText.current.value = res;
    };
    const Clear = () => {
      this.inputText.current.value = "";
    };
    const Insert = (e) => {
      this.inputText.current.value += e.target.value;
      if (e.target.value === "CE") {
        Clear();
      } else if (e.target.value === "=") {
        Equal();
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
              value="1"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="2"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="3"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="+"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="4"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="5"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="6"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="-"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="7"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="8"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="9"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="x"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="CE"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="0"
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="="
            />
            <Button
              onClick={Insert}
              ref={this.Button}
              type="button"
              value="/"
            />
          </Buttons>
        </Container>
      </AppMain>
    );
  }
}

export default App;

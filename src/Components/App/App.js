import React, { Component } from "react";
import Ideas from "../Ideas/Ideas";
import Form from "../Form/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.state.counter += 1;
  };

  addPrompt = (newPrompt, newResponse) => {
    console.log(newResponse, "newResponse");
    console.log(newPrompt, "newPrompt");
    this.increaseCounter();
    this.setState({
      responses: [
        { prompt: newPrompt, response: newResponse, id: this.state.counter },
        ...this.state.responses,
      ],
    });
  };

  render() {
    return (
      <main className="App">
        <div className="title">
          <h1>TELL ME, TINY LEGS TIM</h1>
          <h2>- TIDBITS FROM THE BIRD WHO KNOWS ALL - </h2>
        </div>
        <Form addPrompt={this.addPrompt} />
        <Ideas responses={this.state.responses} />
      </main>
    );
  }
}

export default App;

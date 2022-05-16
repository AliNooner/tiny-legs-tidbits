import React, { Component } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
// import { responseData, data } from '../../APIcalls'
import "./App.css"

const data = {
  "prompt": "What are 5 key points I should know when studying Ancient Rome?",
  "temperature": 0.3,
  "max_tokens": 150,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
};


class App extends Component {
  constructor() {
    super()
    this.state = {
      response: [],
      apiResponse: []
    }
  }

addPrompt = (newInput) => {
  this.setState({response: [...this.state.response, newInput]})
  console.log(this.state.response, 'response')
}

  render() {
    return(
      <main className='App'>
        <h1>APP NAME</h1>
        <Ideas responseFacts={this.state.response} />
        <Form addPrompt={this.state.addPrompt}/>
      </main>
    )
  }
}

export default App;

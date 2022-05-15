import React, { Component } from 'react'
import responseData from '../../APIcalls'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      prompt: ''
    }
  }

  handleChange = (e) => {
    this.setState({prompt:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    responseData(this.state.prompt)
    // console.log('here', this.state.prompt)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          className='input-info'
          type='text'
          name='prompt'
          placeholder='Ask me something'
          value={this.state.prompt}
          onChange={(e) => this.handleChange(e)}
          required
          />

          <button className='submit-btn'>SUBMIT</button>
        </form>
    )
  }
}

export default Form;

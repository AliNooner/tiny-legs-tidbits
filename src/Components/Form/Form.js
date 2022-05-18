import React, { Component } from 'react'
import responseData from '../../APIcalls'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt: '',
    }
  }

  handleChange = (e) => {
    this.setState({prompt:e.target.value})
  }



  handleSubmit = (e) => {
    e.preventDefault()
    // this.setState({prompt:''})
    responseData(this.state.prompt)
    .then(data => this.props.addPrompt(this.state.prompt, data.choices[0].text))
    // console.log('prompt', this.state.prompt)
    // console.log('responses', this.state.responses)
  }




  render() {
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          className='input-info'
          type='text'
          name='prompt'
          placeholder='Ask me anything!'
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

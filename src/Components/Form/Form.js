import React, { Component } from "react"
import responseData from "../../APIcalls"
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
    };
  }

  handleChange = (e) => {
    this.setState({ prompt: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    responseData(this.state.prompt).then((data) =>
      this.props.addPrompt(this.state.prompt, data.choices[0].text)
    ).finally(() => this.setState({prompt: '' })
  )};

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input-info"
          type="text"
          name="prompt"
          placeholder="Ask me anything!"
          value={this.state.prompt}
          onChange={(e) => this.handleChange(e)}
          required
        />

        <button className="submit-btn">Tell me, Tim!</button>
      </form>
    );
  }
}

export default Form;

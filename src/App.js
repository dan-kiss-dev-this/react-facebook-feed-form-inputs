import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const post = (dataObject, Index) => {
  return (
    <p key={Index}>{dataObject.title}</p>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      allValues: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  async handleSubmit(event) {
    // alert('A value was submitted: ' + this.state.value);
    event.preventDefault();
    await this.setState({ allValues: [...this.state.allValues, this.state.value] });
    this.setState({ value: ""});
    console.log(this.state.allValues);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        <form onSubmit={this.handleSubmit}>
          <label>
            Title of Image:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit Post" />
          </label>
        </form>

        <div>
          {this.state.allValues.map((singlePost, index) => post(singlePost, index))}
        </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const post = (dataObject, Index) => <p key={Index}>{dataObject}</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      valueTitle: "",
      valueImage: "",
      allValues: [],
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ valueTitle: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ valueImage: event.target.value });
  }
  
  async handleSubmit(event) {
    // alert('A value was submitted: ' + this.state.value);
    event.preventDefault();
    const postObject = { title: this.state.valueTitle, imageURL: this.state.valueImage };
    // const postObject = new Object(this.state.valueTitle, this.state.valueImage,)
    console.log(postObject);
    await this.setState({ allValues: [...this.state.allValues, this.state.valueTitle] });
    this.setState({ valueTitle: ""});
    console.log(this.state.allValues);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <form onSubmit={this.handleSubmit}>
            <label>
              Title of Image:
            <input type="text" value={this.state.valueTitle} onChange={this.handleChangeTitle} />
            </label>
            <br/>
            <label>
              URL Link to Image:
            <input type="text" value={this.state.valueImage} onChange={this.handleChangeImage} />
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
          </div>  
      </div>
    );
  }
}

export default App;

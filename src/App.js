import React, { Component } from 'react';
import './App.css';

const post = (dataObject, Index) => 
  <div key={Index} className='singlePost'>
    <h2>{dataObject.valueTitle}</h2>
    <img src={dataObject.valueImage} alt="Post pic"/>    
  </div>;

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
    event.preventDefault();
    const postObject = { valueTitle: this.state.valueTitle, valueImage: this.state.valueImage };
    console.log(postObject);
    await this.setState({ allValues: [...this.state.allValues, postObject], valueTitle: "", valueImage: "" });
    console.log(this.state.allValues);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
            <input placeholder="Title of Image" type="text" value={this.state.valueTitle} onChange={this.handleChangeTitle} />
            </label>
            <br/>
            <label>
            <input placeholder="URL Link to Image" type="text" value={this.state.valueImage} onChange={this.handleChangeImage} />
            <br/>
            </label>
            <input type="submit" value="Submit Post" />
          </form>

          <div>
            {this.state.allValues.map((singlePost, index) => post(singlePost, index))}
          </div>
 
          </div>  
      </div>
    );
  }
}

export default App;

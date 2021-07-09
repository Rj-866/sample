import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo"
import Forms from "./component/Forms"

class App extends Component {
  state = {
    myString: "Hello",
    newString: "I am RJ",   
  };

  handleChange = () =>{
    this.setState({
      newString : "RJ Group"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome rj</h1>
        <h2>{this.state.myString}</h2>
        <button onClick={this.handleChange}>Change data</button>
        <Todo sendingData={this.state.newString}/>
        <Forms />
      </div>
    );
  }
}

export default App;

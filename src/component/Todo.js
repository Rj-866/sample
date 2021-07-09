import React, { Component } from 'react'


export default class Todo extends Component {

   state ={
       counter: 0,
       action: ""
   };

   onIncrement = () =>{
    this.setState({
        counter: this.state.counter + 1,
        action: "Incremented"
    })
   }

   onDecrement = () =>{
       
        this.setState({
           counter: this.state.counter - 1,
           action: "Decremented"
       })
   }
    render() {
        return (
            <div>
                <h1>Todo Component</h1>
                <h2>{this.props.sendingData}</h2>
                <h3>{this.state.counter}</h3>
                <h3>{this.state.action}</h3>
                <button onClick ={this.onIncrement}>+</button>
                <button onClick = {this.onDecrement}>-</button>
          
            </div>
        )
    }
}

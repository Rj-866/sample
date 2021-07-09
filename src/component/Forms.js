import React, { Component } from 'react'

export default class Forms extends Component {

    state ={
      
        firstName: "",
        lastName:""
    };

    onHandleChange = (event) =>{            //default parameater for a function called event
        this.setState({
           // inputValue: event.target.value,
            [event.target.name] : event.target.value
        })
    }

    onSubmit =(event) =>{
        event.preventDefault();
        console.log(this.state);  
    }


    render() {
        return (
           <form>
               <h2>Form Component</h2>
               <input type ="text" 
               name ="firstName"
               value={this.state.firstName} 
               onChange = {this.onHandleChange} />

               <input type ="text" 
               name = "lastName"
               value={this.state.lastName} 
               onChange = {this.onHandleChange} />

               <button onClick= {this.onSubmit}>Submit</button>
           </form>
        )
    }
}

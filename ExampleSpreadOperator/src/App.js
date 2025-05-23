import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
super(props);
  this.state = {
    number : [1,2,3,4],
    user : {
      name : "Prabin",
      Age : 27
    },
    inputValue:''
  }
}


handleChange = (e) => {
    this.setState({ inputValue: e.target.value }); // Update input value
  };

addNumber = () => {
  this.setState(prevState => ({
    number : [...prevState.number,this.state.inputValue],
    inputValue : ''
  }))
}

updateUser = () => {
   const updatedFields = { name : 'Example', age: 26, country: 'Canada' };

  this.setState(prevState =>({
    user:{
      ...prevState,
      ...updatedFields
    }
  }))
}

  render () {
      const { number, user } = this.state;

    return (
      <div>
        <h2>Numbers: {number.join(', ')}</h2>
        <input
          type="text"
          value={this.state.inputValue}
          placeholder="Enter item"
          onChange={this.handleChange}
        />
        <button onClick={this.addNumber}>Add Number</button>

        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Country: {user.country || 'N/A'}</p>
        <button onClick={this.updateUser}>Update User</button>
      </div>
  );
}
}

export default App;

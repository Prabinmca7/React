
import React, { Component } from 'react';
import './App.css';

class App extends Component {

//const [name,SetName] = useState("PRABIN");
constructor(props){
super(props);

this.state = {
  name:"PRABIN",
  stateCount : 0  // State Count
};

this.data = "PRABIN";
this.count = 0; // JS count variable

}

 submitHandle = () =>{
  //SetName("Example")
  this.setState({name:"EXAMPLE"});
  this.data = "Example";
}


  handleLetClick = () => {
    this.count++;
    // React won’t re-render because count is not in state
    // But we can force update just for demo (not recommended normally)
    // this.forceUpdate();
  };

  handleStateClick = () => {
    this.setState(prevState => ({
      stateCount: prevState.stateCount + 1
    }));
  };


render(){
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
          <br></br>
        
          Using State Variable - {this.state.name}
        
          <br></br>
          <br></br>
          Using Javascript variable - {this.data}
            <br></br>
          <br></br>
        <input type="button" value="SUBMIT" onClick={this.submitHandle}/>


         <div>
        <button onClick={this.handleLetClick}>
          Let Count: {this.count}
        </button>
        <button onClick={this.handleStateClick}>
          State Count: {this.state.stateCount}
        </button>
      </div>
      </header>
    </div>
  );
}
}

export default App;

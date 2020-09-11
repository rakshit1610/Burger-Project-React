import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Max', age: 28},
      {name:'Manu', age:29},
      {name:'Stephany',age:26}
    ]
  }
  
  switchNameHandler=()=>{
    // console.log("yo");
    // DONT DO IT LIKE THIS:   this.state.persons[1].name='Maxmilian'
    this.setState({
      persons:[
      {name:'Maxmilian', age: 28},
      {name:'Manu', age:29},
      {name:'Stephany',age:27}
      ]
    });
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Max', age: 28},
        {name: event.target.value, age:29},
        {name:'Stephany',age:27}       
      ]
    })
  }

  render(){
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={this.switchNameHandler}>Switch Names</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
      click={this.switchNameHandler} changed={this.nameChangeHandler}> My Hobbies: racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );

  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'hello world'));
  }
}

export default App;

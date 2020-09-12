import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:'yo3' ,name:'Max', age: 28},
      {id:'yo2', name:'Manu', age:29},
      {id:'yo1' ,name:'Stephany',age:26}
    ],
    showPersons: false
  }
  

  nameChangeHandler=(event, id)=>{
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person= {
      ...this.state.persons[personIndex]
    };

    person.name= event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render(){ 
    const style={
      backgroundColor: 'green',
      color: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',


    };
    
  let persons=null;

  if(this.state.showPersons){
    persons=(
      <div>
      {this.state.persons.map((person,index)=>{
        return <Person click={()=>this.deletePersonHandler(index)} 
        name={person.name} age={person.age} key={person.id} 
        changed={(event)=>this.nameChangeHandler(event, person.id)}/>
      })}

      </div>
    )

    style.backgroundColor='red';
  }

  const classes=[];

  if(this.state.persons.length<=2){
    classes.push('red');
  }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }

  return (

    <div className="App" >
      <p className={classes.join(' ')}>hello world</p>
      <button style={style} onClick={this.togglePersonsHandler}>Switch Names</button>
      {persons}
    </div>

  );

  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'hello world'));
  }
}

export default App;

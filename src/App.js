import React, { Component } from 'react';
import Person from './Person.js';
import './index.css';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Rigden', gender: 'Male'},
      {id:'2', name: 'Dichen', gender: 'Female'},
      {id:'3', name: 'Shubham', gender: 'Male'},
      {id:'4', name: 'Satyam', gender: 'Male'}
    ],
    showPerson: false
  };
  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;												
    this.setState({showPerson: !showPerson});
  }

  deletePersonHandler = (personIndex) => {    //this function deletes an paragraph
    const persons = [...this.state.persons];    //or u can also do  const persons =  this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
  
    const person = {
      ...this.state.persons[personIndex]
    }

    // or you can also do const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

  }
    render() {
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

let persons = null;

  if ( this.state.showPerson ) {
persons = (
		<div>
			{this.state.persons.map((person, index) => {
				return <Person 
          click={() => this.deletePersonHandler(index)}  /* alternative would be this.deletePerson.bind(this, 'index') */
          name={person.name} 
          gender={person.gender}
          key={person.id} 
          changed={(event) => this.nameChangedHandler(event, person.id)} />    /*key property is to be given a unique value*/
			})}
        </div>
         );
         style.backgroundColor='red';
  }

  let classes = [];

  if (this.state.persons.length <=2) {
    classes.push('red');
  }
  if (this.state.persons.length <=1) {
    classes.push('bold');
  }

      return (
         <div className='App'>
          <h1>I'm an React App</h1>
          <p  className={classes.join(' ')}>Is this really working?</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Me</button>  
           {persons}         
         </div>
       );
    };
}
export default App;

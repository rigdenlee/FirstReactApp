import React, {Component} from 'react';
import Person from './Person.js';
import './index.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Rigden', gender: 'Male'},
      {name: 'Dichen', gender: 'Female'},
      {name: 'Shubham', gender: 'Male'},
      {name: 'Satyam', gender: 'Male'}
    ],
    showPerson: false
  };
  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;												
    this.setState({showPerson: !showPerson});
  }

  deletePersonHandler = (personIndex) => {    //this function deletes an paragraph
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        cursor: 'pointer'
      }

      let persons = null;

  if ( this.state.showPerson ) {
persons = (
		<div>
			{this.state.persons.map((person, index) => {
				return <Person 
          click={() => this.deletePersonHandler(index)}  /* alternative would be this.deletePerson.bind(this, 'index') */
          name={person.name} 
          gender={person.gender} />
			})}
        </div>
         );
  }
      return (
         <div className='App'>
          <h1>I'm an React App</h1>
          <p>Is this really working?</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Me</button>  
           {persons}         
         </div>
       );
    };
}
export default App;

import React, { Component } from 'react';
import Prop from './Prop';
import './index.css';



class App extends Component {
state = {
  person: [
    {name: 'Rigden', gender: 'male'},
    {name: 'Sonam', gender: 'female'},
    {name: 'Tashi', gender: 'female'}
  ],
  otherState: 'some other state'
}

switchNameHandler = (newName) => {
  this.setState( {      //setstate takes object as an  argument
  person: [
    {name: newName, gender: 'male'},
    {name: 'Dichen', gender: 'female'},
    {name: 'Pema', gender: 'female'}
  ] 
  }
  );
}

onChangeHandler = (event) => {
  this.setState( {
    person: [ 
      { name: 'Rigden', gender: 'male'  },
      {name: 'Sonam', gender: 'female'},
    {name: event.target.value, gender: 'female'}
    ],
    otherState: 'some other state'
  })
}

  render(){
      return (
        <div className="App">
         <button onClick = {() => this.switchNameHandler('Dichen') }>Magic</button>
          <p>Is this really working</p>
          <p>This is really working!</p>
          <Prop name={this.state.person[0].name}
             gender={this.state.person[0].gender}
             click={this.switchNameHandler.bind(this, 'Tashi')} >or is he?</Prop> 
          <Prop name={this.state.person[1].name}
             gender={this.state.person[1].gender}>Or is he?</Prop>
          <Prop name={this.state.person[2].name}
             gender={this.state.person[2].gender}
             changed={this.onChangeHandler}/>
          <Prop name={this.state.otherState} />
        </div>
      )
  }
}
export default App;

// state = {
//   person: [
//     {name: 'Dichen' gender: 'Boy'},
//     {name: 'Sachin' gender: 'Boy'}
//   ]
// }



// const [ currentState, updatedState ] = useState({
//   person: [
//    {name: 'Dichen', gender: 'Boy'},
//    {name: 'Sachin', gender: 'Boy'},
//    {name: 'Shubham', gender: 'girl'}
//    ],
//    otherState: 'some data'
// });

// console.log(currentState);

//  const switchNameHandler = () => {
//      updatedState({
//      person: [
//        {name: 'Dichen', gender: 'Girl'},
//        {name: 'Tandulkar', gender: 'Boy'},
//        {name: 'Shubham', gender: 'boy'}
//      ]
//    })
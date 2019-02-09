import React, { useState } from 'react';
import Prop from './Prop';
import './index.css';

const App = () => {
  const [ currentState, updatedState ] = useState({
       person: [
        {name: 'Dichen', gender: 'Boy'},
        {name: 'Sachin', gender: 'Boy'},
        {name: 'Shubham', gender: 'girl'}
        ],
        otherState: 'some data'
     });
     console.log(currentState);
      const switchNameHandler = () => {
          updatedState({
          person: [
            {name: 'Dichen', gender: 'Girl'},
            {name: 'Tandulkar', gender: 'Boy'},
            {name: 'Shubham', gender: 'boy'}
          ]
        })
            
      }
      return (
        <div className="App">
          <button onClick = {switchNameHandler}>Magic</button>
          <p>Is this really working</p>
          <p>This is really working!</p>
          <Prop name={currentState.person[0].name} gender={currentState.person[0].gender}/>
          <Prop name={currentState.person[1].name} gender={currentState.person[1].gender}>Or is he?</Prop>
          <Prop name={currentState.person[2].name} gender={currentState.person[2].gender}/>
          <Prop name={currentState.otherState} />
        </div>
      )
}

export default App;

// state = {
//   person: [
//     {name: 'Dichen' gender: 'Boy'},
//     {name: 'Sachin' gender: 'Boy'}
//   ]
// }
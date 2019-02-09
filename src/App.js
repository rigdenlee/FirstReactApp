import React, { Component } from 'react';
import Prop from './Prop';
import './index.css';

class App extends Component {
  state = {

  }
    render() {
      return (
        <div className="App">
          <p>Name </p>
          <p>Is this really working</p>
          <p>This is really working!</p>
          <Prop name='Rigden' gender='boy'/>
          <Prop name='Sonam' gender='boy'>Or is he?</Prop>
          <Prop name='Dichen' gender='girl'/>
        </div>
      )
    }
}

export default App;

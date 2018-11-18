import React, { Component } from 'react';
import User from './user';

 class App extends Component {
  constructor() {
    super();

    this.state = {
      name:'Francais',
      lastname:'Jones',
      age:45,
      hobbies:['swimming','reading'],
      spanish:false,
      message(){console.log('hey')},
      car:{brand:'Ford',model:'Focus'},
      mother:'Martha'
    }
  }
  render() {
    return (
      <div>
        <User {...this.state}></User>
      </div>
    )
  }
}

export default App;
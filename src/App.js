import React, { Component } from 'react';
import Ninja from './ninja';
import AddNinja from './AddNinja';
import Table from './Table';

class App extends Component {
  state = {
    ninjas: [
      {name: "Ryu", age: "30", belt: "Black", id: 1},
      {name: "Yoshi", age: "20", belt: "Brown", id: 2},
      {name: "Cassandra", age: "23", belt: "Green", id: 3}
    ] 
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
    console.log(ninjas);
  }
  render() {
    return (
      <div className="App">
        <h1>Leading Ninja Warriors</h1>
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja />
        <Table />
      </div>
    );
  }
}

export default App;

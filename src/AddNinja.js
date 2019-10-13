import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null 
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="new-ninja-form">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" onChange={this.handleChange}/>
            <label htmlFor="age">Age:</label>
            <input id="age" type="text" onChange={this.handleChange}/>
            <label htmlFor="belt">Belt:</label>
            <input id="belt" type="text" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
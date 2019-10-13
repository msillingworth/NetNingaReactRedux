import React, { Component } from 'react';

class Table extends Component {
  state = {
    name: null,
    age: null,
    belt: null 
  }

  render() {
    return (
      <div className="new-ninja-form">
        <table>
          <tbody>
            <tr>
                <th>Customer Name</th>
                <th>Product Cost</th>
                <th>Margin</th>
                </tr>
            <tr>
                <td>Gold Resources</td>
                <td>56.89</td>
                <td>0.02</td>
            </tr>
            <tr>
                <td>Bazil's Mining</td>
                <td>56.89</td>
                <td>0.03</td>
            </tr>
            <tr>
                <td>Lithium Battery</td>
                <td>56.89</td>
                <td>0.25</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Table;
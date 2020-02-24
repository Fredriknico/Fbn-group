import React, { Component } from 'react';
import Additem from '../components/addItem/additem';

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      addItem: false
    };
  }

  operation() {
    this.setState({
      addItem: true
    });
  }

  render() {
    return (
      <div>
        <h1>FRONT PAGE</h1>
        <div>
          <button onClick={() => this.operation()}>Add Item</button>
          {this.state.addItem ? (
            <div>
              {' '}
              <Additem />
              <button onClick={() => this.setState({ addItem: false })}>
                Cancel
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default FrontPage;

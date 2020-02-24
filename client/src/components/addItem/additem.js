import React, { Component } from 'react';
import css from './additem.css';
import axios from 'axios';

class Additem extends Component {
  constructor() {
    super();
    this.addItemHandler = this.addItemHandler.bind(this);
    this.state = {
      inputItem: '',
      inputValue: ''
    };
  }
  addItemHandler() {
    const postData = {
      itemDescription: this.state.inputItem,
      quantity: this.state.inputValue
    };
    axios.post('http://localhost:5000/api/insert', postData).then(res => {
      res.send(res);
    });
  }
  inputItemHandler(event) {
    this.setState({ inputItem: event.target.value });
  }
  inputValueHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="addItem">
        <h1>Add Item !</h1>
        <form>
          <label>
            <input
              type="text"
              placeholder="Add new item"
              value={this.state.inputItem}
              onChange={this.inputItemHandler.bind(this)}
            />
          </label>
          <label>
            <input
              type="integer"
              placeholder="quantity"
              value={this.state.inputValue}
              onChange={this.inputValueHandler.bind(this)}
            />
          </label>
          <button onClick={this.addItemHandler}>Add</button>
        </form>
      </div>
    );
  }
}
export default Additem;

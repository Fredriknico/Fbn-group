import React, { Component } from 'react';
import uuid from 'uuid';
import css from './storage.css';
import { Row } from 'reactstrap';
import axios from 'axios';

class Storage extends Component {
  constructor(props) {
    super(props);
    this.OpenUpdateItemHandler = this.OpenUpdateItemHandler.bind(this);
    this.state = {
      isLoaded: true,
      storage: [],
      updateField: false,
      updateFieldKey: ''
    };
  }
  async componentDidMount() {
    const url = 'http://localhost:5000/api/all';
    await fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoaded: false,
          storage: data
        })
      );
  }

  OpenUpdateItemHandler(key) {
    var x = document
      .querySelector(`div[data-key="${key}"]`)
      .getAttribute('data-key');
    console.log(x);

    // this.setState({
    //   updateField: true
    // });
    // axios.get(`http://localhost:5000/api/item/${key}`).then(res => {
    //   console.log(res.data);
    // });
  }
  render() {
    return (
      <div className="lagerbeholdningdiv">
        <div>
          <h2>Lagerbeholdning</h2>
        </div>
        <div className="LagerOversikt">
          <p>{this.state.isLoaded ? 'Fetching items...' : ''}</p>
          <ul>
            {this.state.storage.map(item => (
              <div
                id={item.id}
                key={item.id}
                data-key={item.id}
                className="itemContainer"
                onClick={() => this.OpenUpdateItemHandler.bind(item.id)}
              >
                <li>
                  <div className="updateItem">
                    <h3>Update item</h3>
                    <input placeholder={item.itemDescription}></input>
                    <input placeholder={item.quantity}></input>
                    <button
                      className="UpdateButton"
                      onClick={() => console.log('CLIK')}
                    >
                      Update
                    </button>
                  </div>
                  <div className="itemStatus">
                    <p>{item.itemDescription}</p>
                    <p>{item.quantity}</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div
          style={{ color: 'blue', margin: 100, backgroundColor: 'grey' }}
        ></div>
      </div>
    );
  }
}
export default Storage;

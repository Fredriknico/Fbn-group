import React, { Component } from "react";
import css from "./storage.css";

class Storage extends Component {
  constructor() {
    super();
    this.state = {
      storage: []
    };
  }
  componentDidMount() {
    fetch("/selectallitems")
      .then(res => res.json())
      .then(
        storage => this.setState({ storage }),
        () => console.log("Storage items fetched...", storage)
      );
  }
  render() {
    return (
      <div>
        <h2>Lagerbeholdning</h2>
        <ul>
          {this.state.storage.map(storage => (
            <li key={storage.id}>
              {storage.ItemDescription} - {storage.quantum}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Storage;

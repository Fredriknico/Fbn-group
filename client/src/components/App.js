import React, { Component } from "react";
import Storage from "./storage/storage";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../components/AppNavbar";
import Header from "../components/heading";
// import ShoppingList from "../components/ShoppingList";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Header />
        <div>
          <h3>
            <a href="">Nicobu</a>
          </h3>
          <h4>
            <a href="http://localhost:5000/insertitem">Insert Item</a>
          </h4>
          <Storage />
        </div>
      </div>
    );
  }
}
export default App;

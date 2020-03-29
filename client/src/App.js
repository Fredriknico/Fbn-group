import 'babel-polyfill';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Storage from './components/storage/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/navbar/AppNavbar';
import Header from './components/heading/heading';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import FrontPage from './views/FrontPage';
import css from './app.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Header />
        <div className="main_window">
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={Notfound} />
          </Switch>
        </div>
        <Storage />
      </div>
    );
  }
}
const Notfound = () => <h1>Not found</h1>;

export default App;

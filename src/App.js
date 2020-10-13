import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Service from './Components/Service';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logIn: false,
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            path='/'
            exact
            render={(prop) => (
              <>
                <Home isLoggedIn={this.state.logIn} />
              </>
            )}
          ></Route>
          <Route
            path='/service'
            component={Service}
            exact
            render={(prop) => (
              <>
                <Service isLoggedIn={this.state.logIn} />
              </>
            )}
          ></Route>
          <Route
            path='/contact'
            exact
            render={(prop) => (
              <>
                <Contact isLoggedIn={this.state.logIn} />
              </>
            )}
          ></Route>
          <Route
            path='/about'
            exact
            render={(prop) => (
              <>
                <About isLoggedIn={this.state.logIn} />
              </>
            )}
          ></Route>
          <Redirect to='/'></Redirect>
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <Footer />
        <br />
        <br />
      </>
    );
  }
}

export default App;

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
import Login from './Components/Login';
import Signup from './Components/Signup';
import MyCourses from './Components/MyCourses';

class App extends Component {
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
                <Home />
              </>
            )}
          ></Route>
          <Route
            path='/service'
            component={Service}
            exact
            render={(prop) => (
              <>
                <Service />
              </>
            )}
          ></Route>
          <Route
            path='/contact'
            exact
            render={(prop) => (
              <>
                <Contact />
              </>
            )}
          ></Route>
          <Route
            path='/about'
            exact
            render={(prop) => (
              <>
                <About />
              </>
            )}
          ></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signup' exact component={Signup}></Route>
          <Route path='/mycourses' exact component={MyCourses}></Route>
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

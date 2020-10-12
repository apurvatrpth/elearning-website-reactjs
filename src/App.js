import React from 'react';
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

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/service' component={Service} exact></Route>
        <Route path='/contact' component={Contact} exact></Route>
        <Route path='/about' component={About} exact></Route>
        <Redirect to='/'></Redirect>
      </Switch>
      <br />
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

export default App;

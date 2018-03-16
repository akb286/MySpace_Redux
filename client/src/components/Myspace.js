import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/Navbar';

const App = () => (
  <div>
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);


export default App;

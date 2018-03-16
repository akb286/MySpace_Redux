import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

const Myspace = () => (
   <Route exact path="/" component={Home} />
);

export default Myspace;

import React from 'react';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



const Myspace = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route component={NoMatch} />
    <Route path="/login" component={Login} />
   <Route path="/dashboard" component={Dashboard} />
  </div>
);

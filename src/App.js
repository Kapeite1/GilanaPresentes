import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components router/home'
import Historia from './components router/historia'
import NossaLoja from './components router/nossaloja'
import FaleConosco from './components router/faleconosco'
import TrabalheConosco from './components router/trabalheconosco'
import EncarteVirtual from './components router/produtos'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/historia' component={Historia}></Route>
          <Route exact path='/nossa loja' component={NossaLoja}></Route>
          <Route exact path='/fale conosco' component={FaleConosco}></Route>
          <Route exact path='/trabalhe conosco' component={TrabalheConosco}></Route>
          <Route exact path='/produtos' component={EncarteVirtual}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;

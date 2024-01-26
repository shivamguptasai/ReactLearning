import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Feature from './Fearture';
import About from './AboutUs';
import Contact from './ContactUs';
import Login from './login';
import {Switch, Route,Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/feature" component={Feature}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
    <Redirect to ="./"/>
    <Home/>
    </Switch>
    </>
  );
}

export default App;

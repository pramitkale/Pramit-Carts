import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Default from "./components/Default"
import Cart from "./components/Cart"
import{Switch ,Route} from "react-router-dom"
import Modal from "./components/Modal"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>
     
     
    </Switch>
    <Modal/>
    
    
    </>
  )
  
    
    
  
}

export default App;

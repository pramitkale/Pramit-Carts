import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"
import StyledButton from "../components/Button"
import NavWrapper from "../components/NavWrapper"

export class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary" >
               <Link to="/"><h3 className="logo text-warning font-weight-bold mb-0"><span className="text-white">Pramit</span>Carts</h3></Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">Explore Products</Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto"><StyledButton>
                   <span className="mr-2"><i className="fas fa-cart-plus"/></span>MyCart
                       
                       
                   </StyledButton></Link>

           </NavWrapper>
          
            
        )
    }
}


export default Navbar

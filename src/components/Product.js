import React, { Component } from 'react'
import styled from "styled-components"
import {ProductConsumer} from "../Context"
import {Link} from "react-router-dom"

export class Product extends Component {
    
    render() {
        const{img,title,id,price,inCart}=this.props.product
        
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card ">
                    <ProductConsumer>
                        {value=>{
                            return(<div className="img-container p-5" onClick={()=>value.handleDetail(id)
                            }><Link to="/details">
                            <img src={img} className="card-img-top"/>
                                
                                </Link>
                               <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                                   value.addToCart(id);
                                    value.openModal(id);}}>
                                   {
                                       inCart?(<p className="text-capitalize mb-0" disabled>Added</p>):(
                                           <i className="fas fa-cart-plus"/>
                                           )
                                        }
                                   </button> 
            
                                </div>)
                        }}

                    
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between ">
                        <p className="align-self-cemter mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span classname="mr-1 font-weight-bold">Rs.{700*price}</span>
                        </h5>
                    </div>

                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper=styled.div`
.card{
    
    transition:all 1s ease-ino-ut;
}
.card-footer{
border-top:2px solid ;
transition:all 1s ease-in-out;

}
&:hover{
    .card{
        border: 0.08rem solid rgba(0,0,0,0.2);
        box-shadow:2px 10px 10px 0px rgba(0,0,0,0.2);
        
    }
    
    
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s ease-in-out;
}

.img-container:hover .card-img-top{
    transform:scale(2.2);
}
.cart-btn{
    position:absolute;
    left:0;
    bottom:0;
    padding:0.2rem 0.9rem;
    border-radius:0 0.5rem 0 0;
    border:transparent;
    transform:translate(100%,100%);
    transition:all 1s ease-in-out;
    font-size:1.7rem;


}
.img-container:hover .cart-btn{

        transform:translate(0,0);
        color:blue;
    }
    
    

`


export default Product

import React, { Component } from 'react'
import { ProductConsumer } from "../Context"
import { Link } from "react-router-dom"
import StyledButton from "./Button"
import styled from "styled-components"

export class Details extends Component {
    render() {
        return (
            <ProductConsumer>

                {
                    value => {
                        const { id, company, img, info, price, title, inCart } = value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5 font-weight-bold">
                                        <h1>{title}</h1>
                                    </div>

                                </div>
                                <div className="row">
                                    <ImgWrapper className="mx-auto col-10 col-md-6 my-3 text-capitalize">
                                      <img src={img} className="img-fluid"/>
                                    </ImgWrapper>
                                    <div className="mx-auto col-10 col-md-6 my-3 text-capitalize">
                                       <h2>Model : {title}</h2> 
                                       <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                           Made by : {company}
                                       </h4>
                                       <h4 className="text-blue">
                                           <strong>Price : <span>Rs.{700*price}</span></strong>
                                       </h4>
                                       <p className=" my-18text-capitalize font-weight-bold ">Know your Product</p>
                                       <p className="text-primary lead">{info}</p>
                                       <Link to="/"><button className="btn btn-light border border-info">Back to Products
                                       </button></Link>
                                       <Link><button className="btn btn-primary ml-2" disabled={inCart?true:false} onClick={()=>{
                                           value.addToCart(id)
                                            value.openModal(id)}}>{inCart?"Added":"Add To Cart"}</button></Link>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

const ImgWrapper=styled.div`
overflow:hidden;
transition:all 1s;

.img-fluid{
    position:relative;
    animation:harry 1s ease-in-out 1s 1 ;
    
    
   

}
&:hover{
    transform:scale(1.2)

}
@keyframes harry {
    from {
        transform:translate(0%,-100%);
    }

    to {
        transform:translate(0,0);

    }
}



`

export default Details

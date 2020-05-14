import React, { Component } from 'react'
import styled from "styled-components"
import { ProductConsumer } from "../Context"
import { Link } from "react-router-dom"
import StyledButton from "./Button"

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value
                    const { img, title, price } = value.modalProduct

                    if (!modalOpen) {
                        return null
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-cpitalize p-5">
                                            <h5>Item added to thr card successfully!</h5>
                                            <img src={img} className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : Rs.{700 * price}</h5>
                                            <Link to="/"><button className="btn btn-light border border-info" onClick={()=>value.closeModal()}>Continue Shoping</button></Link>
                                            <Link to="/cart"><button className="btn btn-primary ml-2"onClick={()=>value.closeModal()}>Look at Cart</button></Link>

                                        </div>
                                    </div>
                                </div>

                            </ModalContainer>
                        )
                    }

                }}

            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;

top:0;
left:0;
right:0;

bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:white;
}

`

export default Modal

import React from 'react'
import{Link} from "react-router-dom"

function CartTotals({value}) {
    const {cartSubTotal,cartTotal,cartTax,clearCart }=value;

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center ml-lg-0 mx-lg-auto">
                 <Link to="/"><button className="btn btn-outline-danger text-uppercase mb-3 px-5 " type="button" onClick={()=>clearCart()}>
                   Clear the cart
                 </button>
                     </Link>
                     
                </div>
            </div>

            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <h5><span className="text-title">Subtotal :</span>
                     <strong>Rs. {700*cartSubTotal}</strong></h5>   
                     <h5><span className="text-title">Gst :</span>
                     <strong>Rs. {700*cartTax}</strong></h5>   
                     <h5><span className="text-title">Total :</span>
                     <strong>Rs. {700*cartTotal}</strong></h5> 
                 
                     
                </div>
            </div>
           
            
        </div>
    )
}

export default CartTotals

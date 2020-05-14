import React, { Component } from 'react'
import Product from './Product'
import Title from "../components/Title"
import {storeProducts} from "../data"
import {ProductConsumer} from "../Context"

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:storeProducts
        }
        console.log(this.state.products)
    }
    
    render() {
        return (
            <>
            <div className="py-5">

                <div className="container">
                    <Title name="Everything You Need ," title="deliverd safe"/>
                    <div className="row">
                        <ProductConsumer>
                        {
                            value=>{
                            return value.Products.map((product)=>{
                                return <Product key={product.id} product={product}/>
                            })
                            }

                            }
                        

                        </ProductConsumer>

                    </div>
                </div>
            </div>
                {/* <Product/> */}
            </>
        )
    }
}

export default ProductList

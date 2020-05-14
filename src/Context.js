import React, { Component } from 'react'
import {storeProducts,detailProduct} from "./data"

const ProductContext=React.createContext()
 

class ProductProvider extends Component {
    constructor() {
        super()
    
        this.state = {
             Products:[],
             detailProduct:detailProduct,
             cart:[],
             modalOpen:false,
             modalProduct:detailProduct,
             cartSubTotal:0,
             cartTax:0,
             cartTotal:0
        }
    }

    increment=(id)=>{
     let tempCart=[...this.state.cart]
     const index=tempCart.indexOf(this.getProduct(id))
     const product=tempCart[index]
     
    
     product.count=product.count + 1
     product.total=product.count*product.price

     this.setState({
         cart:tempCart
     },()=>this.addTotals())
     
      
    }
    decrement=(id)=>{
        let tempCart=[...this.state.cart]
        const index=tempCart.indexOf(this.getProduct(id))
        const product=tempCart[index]
        
        
        product.count=product.count - 1
        
        
        if(product.count <= 0)
                               {            this.removeItem(id);
                                     }
        else {

            product.total=product.count*product.price
            this.setState({
                cart:tempCart
            },()=>this.addTotals())
            
    }}
    removeItem=(id)=>{
     let tempProducts=[...this.state.Products]
     let tempCart=[...this.state.cart]
     tempCart=tempCart.filter((item)=>item.id!=id)
     const index=tempProducts.indexOf(this.getProduct(id))
     const removedProduct=tempProducts[index]
     removedProduct.inCart=false;
     removedProduct.count=0;
     removedProduct.total=0;
     this.setState({
         cart:tempCart,
         Products:tempProducts
     },()=>this.addTotals())

      
    }

    clearCart=()=>{
      this.setState({
          cart:[]

      },() =>{this.setProducts();
    this.addTotals();})}


    addTotals=()=>{
        let subTotal=0;
        this.state.cart.forEach(item =>{
            subTotal=+item.total;
            
            return subTotal
        })
        subTotal=parseFloat(subTotal.toFixed(2))
        const tempTax=subTotal*0.1
        const tax=parseFloat(tempTax.toFixed(2))
        const total=subTotal+tax;
        this.setState({
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total

        })
        
    }
        


 openModal=(id)=>{
  const product=this.getProduct(id);
  this.setState({
      modalProduct:product,
      modalOpen:true
  })
 }
 closeModal=()=>{
  
  this.setState({
      modalOpen:false
  })
 }


    
    
    
    
    componentDidMount(){
        this.setProducts()
    }
    
    
    
    
    getProduct=(id)=>{
       const product=this.state.Products.find((item)=>item.id===id)
       return product;
    }
    
    
    
    
    handleDetail=(id)=>{
        const product=this.getProduct(id)
        this.setState({
            detailProduct:product
        })
        
    }
    
    addToCart=(id)=>{
        let tempProducts=[...this.state.Products]
         let index=tempProducts.indexOf(this.getProduct(id))
    let product=tempProducts[index]  
       product.inCart=true;
       product.count=1
      const price=product.price;
     product.total=price 
     this.setState({
        Products:tempProducts,
        cart:[...this.state.cart,product]
    },()=>{this.addTotals()})}
    
    
    
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item => {
            const singleProduct={...item}
            tempProducts=[...tempProducts,singleProduct]
        });
        this.setState({
            Products:tempProducts
        })
    }

    
    render() {
        return (
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal , increment:this.increment ,decrement:this.decrement ,removeItem:this.removeItem ,clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer

export {ProductProvider,ProductConsumer,ProductContext}

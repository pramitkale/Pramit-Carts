import React, { Component } from 'react'

export class Default extends Component {

    render() {
        console.log(this.props)
        return (
           <div className="container">
               <div className=" row bg-white my-5">
                   <div className="error col-10 mx-auto text-center text-title text-uppercase pt-5">
                       <h1>404</h1>
                       <h1>Error</h1>
                       <h2>Page Not Found</h2>
                       <div/>
                       <h3>The Requested URL <span className="text-danger text-lowercase">{this.props.location.pathname}</span> was not found</h3>
                   </div>
               </div>
           </div>
        )
    }
}

export default Default

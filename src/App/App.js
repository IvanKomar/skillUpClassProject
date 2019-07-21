import React, {Component} from "react"
import "../common/style/reset.css"
import "../common/style/base.css"

import {omit} from 'lodash'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'



class App extends Component {

    state = {
        productsInCart: {
         
        }
    }
    addProductToCart = (prouctId, count) => {
        this.setState((prevState) => ( {
            productsInCart: {
            ...prevState.productsInCart, 
            [prouctId]:(prevState.productsInCart[prouctId] || 0) + count,
        } 
        }))
    }
    removeProductFromCart = (prouctId) => {
        this.setState((prevState) =>({
            productsInCart: omit(prevState.productsInCart, [prouctId])
        }))
    }
           render () {
        return (
        <div>
            <Header
            productsInCart={this.state.productsInCart}
            />
            <Main
            addProductToCart={this.addProductToCart}
            productsInCart={this.state.productsInCart}
            removeProductFromCart={this.removeProductFromCart}
            />
            <Footer/>
        </div>
        )
}
}
export default App

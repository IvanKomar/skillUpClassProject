import React, {Component} from "react"
import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {

    state = {
        productsInCart: {
            '1': 0,
            '2': 0,
        }

    }
    addProductToCart = (prouctId, count) => {
        this.setState((prevState) => ({
            productsInCart: Object.assign({}, prevState.productsInCart, {[prouctId]:(prevState.productsInCart[prouctId] || 0) + count,}) 
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
            />
            <Footer/>
        </div>
        )
}
}
export default App

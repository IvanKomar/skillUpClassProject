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
            '3': 0,
            '4': 0, 
        }

    }
    addProductToCart = (prouctId, count) => {
        this.setState((prevState) => ({
            productsInCart: {
              [prouctId]:prevState.productsInCart[prouctId] + count,
            } 
        }))
    }
           render () {
        return (
        <div>
            <Header
            productsInCart={this.state.productsInCart}
            />
            <button onClick={()=> (this.addProductToCart(1,1))}>addd</button>
            <Main
            addProductToCart={this.addProductToCart}
            />
            <Footer/>
        </div>
        )
}
}
export default App

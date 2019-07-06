import React, {Component} from "react"
import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {

    state = {
        ProductsInCart: {
            '1': 5,
            '2': 10,
        }

    }
           render () {
        return (
        <div>
            <Header
            ProductsInCart={this.state.ProductsInCart}
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

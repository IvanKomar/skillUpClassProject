import React from "react"
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'
import CartPage from '../Main/Cart/CartPage'
import PaymentPage from '../Main/Payment/PaymentPage'
import ShippingPage from '../Main/Shipping/ShippingPage'

const Main = ({addProductToCart}) =>  {
    return (
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
                 filter
				</div>
				<div className="col-lg-9">
				<Route path='/Payment' component={PaymentPage}/>
				<Route path='/Shipping' component={ShippingPage}/>
				<Route path='/' exact render={()=> <ProductsList addProductToCart={addProductToCart}/>}/>
				<Route path='/cart' component={CartPage}/>
				</div>
			</div>
		</div>
	</main>
)
}
export default Main
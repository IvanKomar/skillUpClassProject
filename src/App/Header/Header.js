import React from "react"
import "./header.css"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderCart from "./HeaderCart/HeaderCart"


const Header = (
	{productsInCart}
	) => { 
    return (
    <header className="header">
		<div className="container">
			<div className="row">
			<div className="col-lg-3">
			<HeaderLogo/>
			</div>
			<div className="col-lg-6">
			<HeaderMenu/>
			</div>
			<div className="col-lg-3">
			<HeaderCart
			productsInCart = {productsInCart}
			/>
			</div>
			</div>
		</div>
	</header>
)
}

export default Header
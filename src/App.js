import React from "react"
import "./reset.css"
import "./base.css"
import "./header.css"
import "./menu.css"
import "./cart.css"

const Header = () => { 
    return (
    <header className="header">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<div className="logo">
						<img src="img/logo.png" alt=""/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="menu">
						<ul>
							<li><a href="">Home</a></li>
							<li><a href="">Product</a></li>
							<li><a href="">Payment</a></li>
							<li><a href="">Shipping</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="cart text-center">
						<div className="products-count">0</div>
						<div className="products-price">$500</div>
					</div>
				</div>
			</div>
		</div>
	</header>
)
}
const Main = () =>  {
    return (
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
                 filter
				</div>
				<div className="col-lg-9">
				product-list
				</div>
			</div>
		</div>
	</main>
)
}
const Footer = () =>  {
    return (
    <footer className="footer">
		footer
	</footer>
)
}

const App = () => {
    return(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
    )
}
export default App

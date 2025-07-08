import { Link, useNavigate } from "react-router";

function Header(){

	const navigate=useNavigate();
	
	function logout(){
		localStorage.removeItem("user");
		navigate("/login");
	}
    
    return(
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<Link className="navbar-brand" to="/">Furni<span>.</span></Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						{
						localStorage.getItem("user") && localStorage.getItem("user")==="akshay@gmail.com"
						?
						<>							
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li><Link className="nav-link" to="/">Categories</Link></li>
						<li><Link className="nav-link" to="/">Products</Link></li>
						<li><Link className="nav-link" to="/">Orders</Link></li>
						<li><Link className="nav-link" to="/">Payments</Link></li>
						<li><Link className="nav-link" to="/">Reports</Link></li>
						</>
						:
						localStorage.getItem("user")
						?
						<>
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li><Link className="nav-link" to="/">Products</Link></li>
						<li><Link className="nav-link" to="/">Shopping Cart</Link></li>
						<li><Link className="nav-link" to="/">Orders</Link></li>
						<li><Link className="nav-link" to="/">Profile</Link></li>
						</>
						:
						<>
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li><Link className="nav-link" to="/shop">Shop</Link></li>
						<li><Link className="nav-link" to="/about">About us</Link></li>
						<li><Link className="nav-link" to="/services">Services</Link></li>
						<li><Link className="nav-link" to="/blog">Blog</Link></li>
						<li><Link className="nav-link" to="/contact">Contact us</Link></li>
						</>
						}
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						{
						localStorage.getItem("user")
						?
						<>
						<li><Link className="nav-link" to="/change">{localStorage.getItem("user")}</Link></li>
						<li><button className="btn btn-link" onClick={logout}>Logout</button></li>
						</>						
						:
						<li><Link className="nav-link" title="Login" to="/login"><img src="images/user.svg"/></Link></li>
						}

						<li><Link className="nav-link" to="cart.html"><img src="images/cart.svg"/></Link></li>
					</ul>
				</div>
			</div>
				
		</nav>
    );
}
export default Header;
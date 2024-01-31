import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid justify-content-center">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse flex-grow-0"
						id="navbarNavDropdown">
						<ul className="navbar-nav text-center  font-family-sans-serif">
						<li className="nav-item h4 fw-bold mx-2">
							<Link to="/" className="nav-link">
									HOME
								</Link>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<Link to="/shop" className="nav-link">
									PASSEIOS
								</Link>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<Link to="/history" className="nav-link">
									ADESTRAMENTO
								</Link>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
								<Link to="/about" className="nav-link">
									TAXI-PET
								</Link>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<Link to="/outlet" className="nav-link">
									LOGIN
								</Link>
							</li>
							<li className="nav-item dropdown"></li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
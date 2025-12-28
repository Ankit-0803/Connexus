import AppPaths from "../../lib/appPaths";
import ApiConnector from "../../api/apiConnector";
import ApiEndpoints from "../../api/apiEndpoints";
import CookieUtil from "../../util/cookieUtil";
import Constants from "../../lib/constants";
import { useEffect, useState } from "react";
import ApiUtils from "../../api/apiUtils";
// import logo from "./logo.png";
import logo from "./logo.png";


const Navbar = () => {
	const logoutClickHandler = () => {
		CookieUtil.deleteCookie(Constants.ACCESS_PROPERTY);
		CookieUtil.deleteCookie(Constants.REFRESH_PROPERTY);
		window.location.href = AppPaths.LOGIN;
	};

	const loginClickHandler = (e) => {
		e.preventDefault();
		window.location.href = AppPaths.LOGIN;
	};

	const [btn, setBtn] = useState(false);
	const [details, setDetails] = useState({
		first_name: "",
		last_name: "",
		image: "",
	});

	const getProfileDetail = async () => {
		const url = ApiEndpoints.PROFILE_ICON;
		const profileDetails = await ApiConnector.sendGetRequest(url);
		setDetails(profileDetails);
	};

	useEffect(() => {
		const token = ApiUtils.getAuthHeader();
		if (token.Authorization === "JWT null") {
			setBtn(() => false);
		} else {
			setBtn(() => true);
			getProfileDetail();
		}
	},[]);

	return (
		
		<nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky" >
			<img src={logo} style={{
                width: "10rem"
            }}/>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href={AppPaths.FEED}>
							Home
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href={AppPaths.HOME}>
							Chat
						</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					{btn ? (
						<div>
							<div className="d-flex flex-row align-items-center">
								<img
									src={`http://127.0.0.1:7890${details.image}`}
									alt={details.first_name}
									style={{
										width: "7rem",
										height: "4rem",
										borderRadius: "100%",
									}}
									className="mr-2"
								/>
								<button
									onClick={logoutClickHandler}
									className="btn btn-outline-danger btn-block mt-2"
								>
									Log Out
								</button>
							</div>

							<span
								className="font-weight-bold "
								style={{
									fontSize: "1rem",
									textTransform: "capitalize",
									paddingTop: "0px",
            
								}}
							>
								{`${details.first_name} ${details.last_name}`}
							</span>
						</div>
					) : (
						<button
							onClick={loginClickHandler}
							className="btn btn-outline-warning btn-block mt-1"
						>
							Log in
						</button>
					)}
				</form>
			</div>
		</nav>
		
	);
};

export default Navbar;


// import AppPaths from "../../lib/appPaths";
// import ApiConnector from "../../api/apiConnector";
// import ApiEndpoints from "../../api/apiEndpoints";
// import CookieUtil from "../../util/cookieUtil";
// import Constants from "../../lib/constants";
// import { useEffect, useState } from "react";
// import ApiUtils from "../../api/apiUtils";
// import logo from "./logo.png";
// import "./navbar.css";

// const Navbar = () => {
// 	const logoutClickHandler = () => {
// 		CookieUtil.deleteCookie(Constants.ACCESS_PROPERTY);
// 		CookieUtil.deleteCookie(Constants.REFRESH_PROPERTY);
// 		window.location.href = AppPaths.LOGIN;
// 	};

// 	const loginClickHandler = (e) => {
// 		e.preventDefault();
// 		window.location.href = AppPaths.LOGIN;
// 	};

// 	const [btn, setBtn] = useState(false);
// 	const [details, setDetails] = useState({
// 		first_name: "",
// 		last_name: "",
// 		image: "",
// 	});
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const getProfileDetail = async () => {
// 		const url = ApiEndpoints.PROFILE_ICON;
// 		const profileDetails = await ApiConnector.sendGetRequest(url);
// 		setDetails(profileDetails);
// 	};

// 	useEffect(() => {
// 		const token = ApiUtils.getAuthHeader();
// 		if (token.Authorization === "JWT null") {
// 			setBtn(() => false);
// 		} else {
// 			setBtn(() => true);
// 			getProfileDetail();
// 		}
// 	}, []);

// 	return (
// 		<nav className="cx-navbar">
// 			<div className="cx-navbar-container">
// 				{/* Logo */}
// 				<a href={AppPaths.FEED} className="cx-navbar-logo">
// 					<img src={logo} alt="ConnectX Logo" className="cx-logo-img" />
// 				</a>

// 				{/* Mobile Menu Toggle */}
// 				<button
// 					className="cx-navbar-toggle"
// 					onClick={() => setIsMenuOpen(!isMenuOpen)}
// 					aria-label="Toggle navigation"
// 				>
// 					<span className={`cx-hamburger ${isMenuOpen ? 'active' : ''}`}>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</span>
// 				</button>

// 				{/* Nav Links */}
// 				<div className={`cx-navbar-menu ${isMenuOpen ? 'active' : ''}`}>
// 					<ul className="cx-nav-links">
// 						<li className="cx-nav-item">
// 							<a href={AppPaths.FEED} className="cx-nav-link">
// 								<svg
// 									width="20"
// 									height="20"
// 									viewBox="0 0 24 24"
// 									fill="none"
// 									stroke="currentColor"
// 									strokeWidth="2"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
// 									<polyline points="9 22 9 12 15 12 15 22"></polyline>
// 								</svg>
// 								<span>Home</span>
// 							</a>
// 						</li>
// 						<li className="cx-nav-item">
// 							<a href={AppPaths.HOME} className="cx-nav-link">
// 								<svg
// 									width="20"
// 									height="20"
// 									viewBox="0 0 24 24"
// 									fill="none"
// 									stroke="currentColor"
// 									strokeWidth="2"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
// 								</svg>
// 								<span>Chat</span>
// 							</a>
// 						</li>
// 					</ul>

// 					{/* User Section */}
// 					<div className="cx-navbar-user">
// 						{btn ? (
// 							<div className="cx-user-profile">
// 								<div className="cx-user-info">
// 									<img
// 										src={`http://127.0.0.1:7890${details.image}`}
// 										alt={details.first_name}
// 										className="cx-user-avatar"
// 									/>
// 									<div className="cx-user-details">
// 										<span className="cx-user-name">
// 											{`${details.first_name} ${details.last_name}`}
// 										</span>
// 										<span className="cx-user-status">Online</span>
// 									</div>
// 								</div>
// 								<button
// 									onClick={logoutClickHandler}
// 									className="cx-logout-btn"
// 								>
// 									<svg
// 										width="18"
// 										height="18"
// 										viewBox="0 0 24 24"
// 										fill="none"
// 										stroke="currentColor"
// 										strokeWidth="2"
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 									>
// 										<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
// 										<polyline points="16 17 21 12 16 7"></polyline>
// 										<line x1="21" y1="12" x2="9" y2="12"></line>
// 									</svg>
// 									<span>Logout</span>
// 								</button>
// 							</div>
// 						) : (
// 							<button
// 								onClick={loginClickHandler}
// 								className="cx-login-btn"
// 							>
// 								<svg
// 									width="18"
// 									height="18"
// 									viewBox="0 0 24 24"
// 									fill="none"
// 									stroke="currentColor"
// 									strokeWidth="2"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
// 									<polyline points="10 17 15 12 10 7"></polyline>
// 									<line x1="15" y1="12" x2="3" y2="12"></line>
// 								</svg>
// 								<span>Login</span>
// 							</button>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;
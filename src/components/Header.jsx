import { useState, useRef, useEffect } from "react";
import CartModal from "./CartModal";
import Search from "./Search";
import Topbar from "./Topbar";
import useAuthStore from "../stores/useAuthStore";
import logo from "../assets/img/logo.png";
import defaultPic from "../assets/img/default.png";
import { CiUser, CiLogout, CiShoppingCart } from "react-icons/ci";
import getImageUrl from "../utils/getImageUrl";

const themeIcons = {
	light: <i className="ci-sun" />,
	dark: <i className="ci-moon" />,
	auto: <i className="ci-auto" />,
};

const profileDropdownIcons = {
	account: <CiUser size={20} />, // Account settings
	orders: <CiShoppingCart size={20} />, // Orders
	logout: <CiLogout size={20} />, // Logout
};

const Header = () => {
	const { user, logout } = useAuthStore();
	const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
	const [theme, setTheme] = useState("light"); // Track selected theme
	const themeDropdownRef = useRef(null);
	const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
	const profileDropdownRef = useRef(null);

	// Close dropdowns on outside click
	useEffect(() => {
		const handleClick = (e) => {
			if (
				themeDropdownRef.current &&
				!themeDropdownRef.current.contains(e.target)
			) {
				setThemeDropdownOpen(false);
			}
			if (
				profileDropdownRef.current &&
				!profileDropdownRef.current.contains(e.target)
			) {
				setProfileDropdownOpen(false);
			}
		};
		if (themeDropdownOpen || profileDropdownOpen) {
			document.addEventListener("mousedown", handleClick);
		} else {
			document.removeEventListener("mousedown", handleClick);
		}
		return () => document.removeEventListener("mousedown", handleClick);
	}, [themeDropdownOpen, profileDropdownOpen]);

	// Optionally, persist theme to localStorage or apply to document.body
	useEffect(() => {
		document.body.setAttribute("data-bs-theme", theme);
	}, [theme]);

	return (
		<>
			<Search />
			<CartModal />
			<Topbar />
			<header
				className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0"
				data-sticky-navbar='{"offset": 500}'
			>
				<div className="container py-2 py-lg-3">
					{/* start Navbar toggle */}
					<div className="d-flex align-items-center gap-3 d-block d-md-none">
						<button
							aria-controls="navbarNav"
							aria-label="Toggle navigation"
							className="navbar-toggler me-4 me-md-2"
							data-bs-target="#navbarNav"
							data-bs-toggle="offcanvas"
							type="button"
						>
							<span className="navbar-toggler-icon" />
						</button>
					</div>
					{/* end Navbar toggle */}
					{/* <a className="navbar-brand fs-2 py-0 m-0 me-auto me-sm-n5" href="/">
						Gift Shop
					</a> */}
					<div
						className="ratio ratio-1x1 d-none d-md-block "
						style={{
							width: "5%",
						}}
					>
						<img alt="logo" src={logo} />
					</div>
					<div className="d-flex align-items-center">
						<button
							aria-controls="stuckNav"
							aria-expanded="false"
							aria-label="Toggle navigation in navbar stuck state"
							className="navbar-toggler d-none navbar-stuck-show me-3"
							data-bs-target="#stuckNav"
							data-bs-toggle="collapse"
							type="button"
						>
							<span className="navbar-toggler-icon" />
						</button>
						{/* React Light or Dark Theme Dropdown */}
						<div className="dropdown position-static" ref={themeDropdownRef}>
							<button
								type="button"
								className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
								aria-label={`Toggle theme (${theme})`}
								aria-expanded={themeDropdownOpen}
								onClick={() => setThemeDropdownOpen((open) => !open)}
							>
								<span className="theme-icon-active d-flex animate-target">
									{themeIcons[theme]}
								</span>
							</button>
							{themeDropdownOpen && (
								<ul
									className="dropdown-menu show"
									style={{ "--cz-dropdown-min-width": "9rem" }}
								>
									<li>
										<button
											type="button"
											className={`dropdown-item${
												theme === "light" ? " active" : ""
											}`}
											aria-pressed={theme === "light"}
											onClick={() => {
												setTheme("light");
												setThemeDropdownOpen(false);
											}}
										>
											<span className="theme-icon-active d-flex fs-base me-2">
												<i className="ci-sun" />
											</span>
											<span className="theme-label">Light</span>
											{theme === "light" && (
												<i className="item-active-indicator ci-check ms-auto" />
											)}
										</button>
									</li>
									<li>
										<button
											type="button"
											className={`dropdown-item${
												theme === "dark" ? " active" : ""
											}`}
											aria-pressed={theme === "dark"}
											onClick={() => {
												setTheme("dark");
												setThemeDropdownOpen(false);
											}}
										>
											<span className="theme-icon d-flex fs-base me-2">
												<i className="ci-moon" />
											</span>
											<span className="theme-label">Dark</span>
											{theme === "dark" && (
												<i className="item-active-indicator ci-check ms-auto" />
											)}
										</button>
									</li>
									<li>
										<button
											type="button"
											className={`dropdown-item${
												theme === "auto" ? " active" : ""
											}`}
											aria-pressed={theme === "auto"}
											onClick={() => {
												setTheme("auto");
												setThemeDropdownOpen(false);
											}}
										>
											<span className="theme-icon d-flex fs-base me-2">
												<i className="ci-auto" />
											</span>
											<span className="theme-label">Auto</span>
											{theme === "auto" && (
												<i className="item-active-indicator ci-check ms-auto" />
											)}
										</button>
									</li>
								</ul>
							)}
						</div>
						{/* end light or dark theme */}
						<button
							aria-controls="searchBox"
							aria-label="Toggle search bar"
							className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-lg-none"
							data-bs-target="#searchBox"
							data-bs-toggle="offcanvas"
							type="button"
						>
							<i className="ci-search animate-target" />
						</button>

						<a
							className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
							href="#!"
						>
							<i className="ci-heart animate-target" />
							<span className="visually-hidden">Wishlist</span>
						</a>
						<button
							aria-controls="shoppingCart"
							aria-label="Shopping cart"
							className="btn btn-icon btn-lg fs-xl btn-outline-secondary position-relative border-0 rounded-circle animate-scale"
							data-bs-target="#shoppingCart"
							data-bs-toggle="offcanvas"
							type="button"
						>
							<span
								className="position-absolute top-0 start-100 badge fs-xs text-bg-primary rounded-pill mt-1 ms-n4 z-2"
								style={{
									"--cz-badge-padding-x": ".42em",
									"--cz-badge-padding-y": ".25em",
								}}
							>
								3
							</span>
							<i className="ci-shopping-bag animate-target me-1" />
						</button>
						{user ? (
							<div
								className="dropdown position-static ms-2"
								ref={profileDropdownRef}
							>
								<button
									type="button"
									className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
									aria-label="Profile menu"
									aria-expanded={profileDropdownOpen}
									onClick={() => setProfileDropdownOpen((open) => !open)}
								>
									<img
										src={
											getImageUrl(user?.record, user?.record?.avatar) ||
											defaultPic
										}
										alt="Profile"
										className="img-fluid rounded-circle"
										style={{
											height: "2.2rem",
											width: "2.2rem",
											objectFit: "cover",
										}}
									/>
									<span className="visually-hidden">Profile</span>
								</button>
								{profileDropdownOpen && (
									<ul
										className="dropdown-menu dropdown-menu-end show "
										style={{ minWidth: "12rem", right: "20px" }}
									>
										<li>
											<a
												className="dropdown-item d-flex align-items-center"
												href="/account"
											>
												<span className="me-2">
													{profileDropdownIcons.account}
												</span>
												Account Settings
											</a>
										</li>
										<li>
											<a
												className="dropdown-item d-flex align-items-center"
												href="/orders"
											>
												<span className="me-2">
													{profileDropdownIcons.orders}
												</span>
												Orders
											</a>
										</li>
										<li>
											<button
												className="dropdown-item d-flex align-items-center"
												type="button"
												onClick={() => {
													setProfileDropdownOpen(false);
													logout();
												}}
											>
												<span className="me-2">
													{profileDropdownIcons.logout}
												</span>
												Logout
											</button>
										</li>
									</ul>
								)}
							</div>
						) : (
							<a
								className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
								href="/login"
							>
								<i className="ci-user animate-target" />
								<span className="visually-hidden">Account</span>
							</a>
						)}
					</div>
				</div>
				<div className="collapse navbar-stuck-hide" id="stuckNav">
					<nav
						aria-labelledby="navbarNavLabel"
						className="offcanvas offcanvas-start"
						id="navbarNav"
						tabIndex="-1"
					>
						<div className="offcanvas-header py-3">
							<h5 className="offcanvas-title" id="navbarNavLabel">
								Gift Shop
							</h5>

							<button
								aria-label="Close"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								type="button"
							/>
						</div>
						{/* Logo for mobile Nav */}
						<div className="offcanvas-header gap-3 d-md-none pt-0 pb-3">
							<div
								className="ratio ratio-1x1"
								style={{
									width: "50%",
								}}
							>
								<img alt="logo" src={logo} />
							</div>
						</div>
						{/* end Logo for mobile Nav */}
						<div className="offcanvas-body pt-1 pb-3 py-lg-0">
							<div className="container pb-lg-2 px-0 px-lg-3">
								<div className="position-relative d-lg-flex align-items-center justify-content-between">
									<div className="navbar-nav"></div>
									<ul className="navbar-nav position-relative me-xl-n5">
										<li className="nav-item dropdown pb-lg-2 me-lg-n1 me-xl-0">
											<a
												aria-current="page"
												aria-expanded="false"
												className="nav-link active"
												data-bs-toggle="dropdown"
												data-bs-trigger="hover"
												href="/"
												role="button"
											>
												Home
											</a>
										</li>

										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<a className="nav-link" href="/about">
												About
											</a>
										</li>
										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<a className="nav-link" href="/shop">
												Shop
											</a>
										</li>

										<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
											<a className="nav-link" href="/contact">
												Contact
											</a>
										</li>
									</ul>
									<button
										aria-controls="searchBox"
										className="btn btn-outline-secondary justify-content-start w-100 px-3 mb-lg-2 ms-3 d-none d-lg-inline-flex"
										data-bs-target="#searchBox"
										data-bs-toggle="offcanvas"
										style={{
											maxWidth: "240px",
										}}
										type="button"
									>
										<i className="ci-search fs-base ms-n1 me-2" />
										<span className="text-body-tertiary fw-normal">Search</span>
									</button>
								</div>
							</div>
						</div>
						<div className="offcanvas-header border-top px-0 py-3 mt-3 d-md-none">
							<div className="nav nav-justified w-100">
								{user ? (
									<>
										<a className="nav-link border-end" href="#">
											<img
												src={
													getImageUrl(user?.record, user?.record?.avatar) ||
													defaultPic
												}
												alt="avatar"
												className="img-fluid rounded-circle"
												style={{
													width: "40px",
													height: "40px",
													objectFit: "cover",
													borderRadius: "50%",
												}}
											/>
											<span className="ms-2">Profile</span>
										</a>
									</>
								) : (
									<>
										<a className="nav-link border-end" href="/login">
											<i className="ci-user fs-lg opacity-60 me-2" />
											Account
										</a>
									</>
								)}
								<a className="nav-link" href="#!">
									<i className="ci-heart  fs-lg opacity-60 me-2" />
									Wishlist
								</a>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;

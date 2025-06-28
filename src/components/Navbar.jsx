const Navbar = () => {
	return (
		<header
			className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0"
			data-sticky-navbar='{"offset": 500}'
		>
			<div className="container py-2 py-lg-3">
				<div className="d-flex align-items-center gap-3">
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
					<div className="dropdown d-none d-md-block nav">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							aria-label="Country select: USA"
							className="nav-link dropdown-toggle py-1 px-0"
							data-bs-toggle="dropdown"
							href="#"
						>
							<div
								className="ratio ratio-1x1"
								style={{
									width: "20px",
								}}
							>
								<img alt="USA" src="assets/img/flags/en-us.png" />
							</div>
						</a>
						<ul
							className="dropdown-menu fs-sm"
							style={{
								"--cz-dropdown-spacer": ".5rem",
							}}
						>
							<li>
								<a className="dropdown-item" href="#!">
									<img
										alt="United Kingdom"
										className="flex-shrink-0 me-2"
										src="assets/img/flags/en-uk.png"
										width="20"
									/>
									United Kingdom
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									<img
										alt="France"
										className="flex-shrink-0 me-2"
										src="assets/img/flags/fr.png"
										width="20"
									/>
									France
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									<img
										alt="Deutschland"
										className="flex-shrink-0 me-2"
										src="assets/img/flags/de.png"
										width="20"
									/>
									Deutschland
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									<img
										alt="Italia"
										className="flex-shrink-0 me-2"
										src="assets/img/flags/it.png"
										width="20"
									/>
									Italia
								</a>
							</li>
						</ul>
					</div>
					<div className="dropdown d-none d-md-block nav">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							className="nav-link animate-underline dropdown-toggle fw-normal py-1 px-0"
							data-bs-toggle="dropdown"
							href="#"
						>
							<span className="animate-target">Washington</span>
						</a>
						<ul
							className="dropdown-menu fs-sm"
							style={{
								"--cz-dropdown-spacer": ".5rem",
							}}
						>
							<li>
								<a className="dropdown-item" href="#!">
									Chicago
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									Los Angeles
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									New York
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#!">
									Philadelphia
								</a>
							</li>
						</ul>
					</div>
				</div>
				<a
					className="navbar-brand fs-2 py-0 m-0 me-auto me-sm-n5"
					href="index.html"
				>
					Cartzilla
				</a>
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
					<div className="dropdown">
						<button
							aria-expanded="false"
							aria-label="Toggle theme (light)"
							className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
							data-bs-toggle="dropdown"
							type="button"
						>
							<span className="theme-icon-active d-flex animate-target">
								<i className="ci-sun" />
							</span>
						</button>
						<ul
							className="dropdown-menu"
							style={{
								"--cz-dropdown-min-width": "9rem",
							}}
						>
							<li>
								<button
									aria-pressed="true"
									className="dropdown-item active"
									data-bs-theme-value="light"
									type="button"
								>
									<span className="theme-icon d-flex fs-base me-2">
										<i className="ci-sun" />
									</span>
									<span className="theme-label">Light</span>
									<i className="item-active-indicator ci-check ms-auto" />
								</button>
							</li>
							<li>
								<button
									aria-pressed="false"
									className="dropdown-item"
									data-bs-theme-value="dark"
									type="button"
								>
									<span className="theme-icon d-flex fs-base me-2">
										<i className="ci-moon" />
									</span>
									<span className="theme-label">Dark</span>
									<i className="item-active-indicator ci-check ms-auto" />
								</button>
							</li>
							<li>
								<button
									aria-pressed="false"
									className="dropdown-item"
									data-bs-theme-value="auto"
									type="button"
								>
									<span className="theme-icon d-flex fs-base me-2">
										<i className="ci-auto" />
									</span>
									<span className="theme-label">Auto</span>
									<i className="item-active-indicator ci-check ms-auto" />
								</button>
							</li>
						</ul>
					</div>
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
						className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
						href="account-signin.html"
					>
						<i className="ci-user animate-target" />
						<span className="visually-hidden">Account</span>
					</a>
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
							Browse Cartzilla
						</h5>
						<button
							aria-label="Close"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							type="button"
						/>
					</div>
					<div className="offcanvas-header gap-3 d-md-none pt-0 pb-3">
						<div className="dropdown nav">
							<a
								aria-expanded="false"
								aria-haspopup="true"
								aria-label="Country select: USA"
								className="nav-link dropdown-toggle py-1 px-0"
								data-bs-toggle="dropdown"
								href="#"
							>
								<div
									className="ratio ratio-1x1"
									style={{
										width: "20px",
									}}
								>
									<img alt="USA" src="assets/img/flags/en-us.png" />
								</div>
							</a>
							<ul
								className="dropdown-menu fs-sm"
								style={{
									"--cz-dropdown-spacer": ".5rem",
								}}
							>
								<li>
									<a className="dropdown-item" href="#!">
										<img
											alt="United Kingdom"
											className="flex-shrink-0 me-2"
											src="assets/img/flags/en-uk.png"
											width="20"
										/>
										United Kingdom
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										<img
											alt="France"
											className="flex-shrink-0 me-2"
											src="assets/img/flags/fr.png"
											width="20"
										/>
										France
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										<img
											alt="Deutschland"
											className="flex-shrink-0 me-2"
											src="assets/img/flags/de.png"
											width="20"
										/>
										Deutschland
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										<img
											alt="Italia"
											className="flex-shrink-0 me-2"
											src="assets/img/flags/it.png"
											width="20"
										/>
										Italia
									</a>
								</li>
							</ul>
						</div>
						<div className="dropdown nav">
							<a
								aria-expanded="false"
								aria-haspopup="true"
								className="nav-link animate-underline dropdown-toggle fw-normal py-1 px-0"
								data-bs-toggle="dropdown"
								href="#"
							>
								<span className="animate-target">Washington</span>
							</a>
							<ul
								className="dropdown-menu fs-sm"
								style={{
									"--cz-dropdown-spacer": ".5rem",
								}}
							>
								<li>
									<a className="dropdown-item" href="#!">
										Chicago
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										Los Angeles
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										New York
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#!">
										Philadelphia
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="offcanvas-body pt-1 pb-3 py-lg-0">
						<div className="container pb-lg-2 px-0 px-lg-3">
							<div className="position-relative d-lg-flex align-items-center justify-content-between">
								<div className="navbar-nav">
									<div className="dropdown position-static pb-lg-2">
										<button
											aria-expanded="false"
											className="nav-link animate-underline fw-semibold text-uppercase ps-0"
											data-bs-auto-close="outside"
											data-bs-toggle="dropdown"
											data-bs-trigger="hover"
											type="button"
										>
											<i className="ci-menu fs-lg me-2" />
											<span className="animate-target">Categories</span>
										</button>
									</div>
								</div>
								<ul className="navbar-nav position-relative me-xl-n5">
									<li className="nav-item dropdown pb-lg-2 me-lg-n1 me-xl-0">
										<a
											aria-current="page"
											aria-expanded="false"
											className="nav-link dropdown-toggle active"
											data-bs-toggle="dropdown"
											data-bs-trigger="hover"
											href="#"
											role="button"
										>
											Home
										</a>
									</li>
									<li className="nav-item dropdown position-static pb-lg-2 me-lg-n1 me-xl-0">
										<a
											aria-expanded="false"
											className="nav-link dropdown-toggle"
											data-bs-toggle="dropdown"
											data-bs-trigger="hover"
											href="#"
											role="button"
										>
											Shop
										</a>
									</li>
									<li className="nav-item dropdown pb-lg-2 me-lg-n1 me-xl-0">
										<a
											aria-expanded="false"
											className="nav-link dropdown-toggle"
											data-bs-auto-close="outside"
											data-bs-toggle="dropdown"
											data-bs-trigger="hover"
											href="#"
											role="button"
										>
											Account
										</a>
									</li>
									<li className="nav-item dropdown pb-lg-2 me-lg-n1 me-xl-0">
										<a
											aria-expanded="false"
											className="nav-link dropdown-toggle"
											data-bs-auto-close="outside"
											data-bs-toggle="dropdown"
											data-bs-trigger="hover"
											href="#"
											role="button"
										>
											Pages
										</a>
									</li>
									<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
										<a className="nav-link" href="docs/installation.html">
											Docs
										</a>
									</li>
									<li className="nav-item pb-lg-2 me-lg-n2 me-xl-0">
										<a className="nav-link" href="docs/typography.html">
											Components
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
							<a className="nav-link border-end" href="account-signin.html">
								<i className="ci-user fs-lg opacity-60 me-2" />
								Account
							</a>
							<a className="nav-link" href="#!">
								<i className="ci-heart fs-lg opacity-60 me-2" />
								Wishlist
							</a>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

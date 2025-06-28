import React from "react";

const Footer = () => {
	return (
		<footer className="footer pt-5 pb-4">
			<div className="container pt-sm-2 pt-md-3 pt-lg-4">
				<div className="row pb-5 mb-lg-3">
					{/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
					<div className="col-md-8 col-xl-7 pb-2 pb-md-0 mb-4 mb-md-0 mt-n3 mt-sm-0">
						<div className="accordion" id="footerLinks">
							<div className="row row-cols-1 row-cols-sm-3">
								<div className="accordion-item col border-0">
									<h6 className="accordion-header" id="categoriesHeading">
										<span className="text-dark-emphasis d-none d-sm-block">
											Categories
										</span>
										<button
											type="button"
											className="accordion-button collapsed py-3 d-sm-none"
											data-bs-toggle="collapse"
											data-bs-target="#categoriesLinks"
											aria-expanded="false"
											aria-controls="categoriesLinks"
										>
											Categories
										</button>
									</h6>
									<div
										className="accordion-collapse collapse d-sm-block"
										id="categoriesLinks"
										aria-labelledby="categoriesHeading"
										data-bs-parent="#footerLinks"
									>
										<ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													For women
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													For men
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Home clothes
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Accessories
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Sale
												</a>
											</li>
										</ul>
									</div>
									<hr className="d-sm-none my-0" />
								</div>
								<div className="accordion-item col border-0">
									<h6 className="accordion-header" id="accountHeading">
										<span className="text-dark-emphasis d-none d-sm-block">
											Account
										</span>
										<button
											type="button"
											className="accordion-button collapsed py-3 d-sm-none"
											data-bs-toggle="collapse"
											data-bs-target="#accountLinks"
											aria-expanded="false"
											aria-controls="accountLinks"
										>
											Account
										</button>
									</h6>
									<div
										className="accordion-collapse collapse d-sm-block"
										id="accountLinks"
										aria-labelledby="accountHeading"
										data-bs-parent="#footerLinks"
									>
										<ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Your account
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Shipping &amp; policies
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Refunds &amp; replacements
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Order tracking
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Delivery info
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Taxes &amp; fees
												</a>
											</li>
										</ul>
									</div>
									<hr className="d-sm-none my-0" />
								</div>
								<div className="accordion-item col border-0">
									<h6 className="accordion-header" id="customerHeading">
										<span className="text-dark-emphasis d-none d-sm-block">
											Customer service
										</span>
										<button
											type="button"
											className="accordion-button collapsed py-3 d-sm-none"
											data-bs-toggle="collapse"
											data-bs-target="#customerLinks"
											aria-expanded="false"
											aria-controls="customerLinks"
										>
											Customer service
										</button>
									</h6>
									<div
										className="accordion-collapse collapse d-sm-block"
										id="customerLinks"
										aria-labelledby="customerHeading"
										data-bs-parent="#footerLinks"
									>
										<ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Payment methods
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Money back guarantee
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Refunds &amp; replacements
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Product returns
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Support center
												</a>
											</li>
											<li className="d-flex w-100 pt-1">
												<a
													className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
													href="#!"
												>
													Shipping
												</a>
											</li>
										</ul>
									</div>
									<hr className="d-sm-none my-0" />
								</div>
							</div>
						</div>
					</div>
					{/* Subscription */}
					<div className="col-md-4 offset-xl-1">
						<h6 className="mb-4">Join us and stay up to date</h6>
						<form className="needs-validation" noValidate="">
							<div className="form-check form-check-inline">
								<input
									type="checkbox"
									className="form-check-input"
									id="check-woman"
									defaultChecked=""
								/>
								<label htmlFor="check-woman" className="form-check-label">
									Woman
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									type="checkbox"
									className="form-check-input"
									id="check-man"
								/>
								<label htmlFor="check-man" className="form-check-label">
									Man
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									type="checkbox"
									className="form-check-input"
									id="check-sale"
								/>
								<label htmlFor="check-sale" className="form-check-label">
									Sale
								</label>
							</div>
							<div className="position-relative mt-3">
								<input
									type="email"
									className="form-control form-control-lg bg-image-none text-start"
									placeholder="Enter email"
									aria-label="Your email address"
									required=""
								/>
								<div className="invalid-tooltip bg-transparent p-0">
									Please enter your email address!
								</div>
								<button
									type="submit"
									className="btn btn-icon btn-ghost fs-xl btn-secondary border-0 position-absolute top-0 end-0 mt-1 me-1"
									aria-label="Submit your email address"
								>
									<i className="ci-arrow-up-right" />
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* Social account links */}
				<div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-n2 mt-md-0">
					<a
						className="btn btn-icon fs-base btn-outline-secondary border-0"
						href="#!"
						data-bs-toggle="tooltip"
						data-bs-template='<div class="tooltip fs-xs mb-n2" role="tooltip"><div class="tooltip-inner bg-transparent text-body p-0"></div></div>'
						title="Facebook"
						aria-label="Follow us on Facebook"
					>
						<i className="ci-facebook" />
					</a>
					<a
						className="btn btn-icon fs-base btn-outline-secondary border-0"
						href="#!"
						data-bs-toggle="tooltip"
						data-bs-template='<div class="tooltip fs-xs mb-n2" role="tooltip"><div class="tooltip-inner bg-transparent text-body p-0"></div></div>'
						title="Instagram"
						aria-label="Follow us on Instagram"
					>
						<i className="ci-instagram" />
					</a>
					<a
						className="btn btn-icon fs-base btn-outline-secondary border-0"
						href="#!"
						data-bs-toggle="tooltip"
						data-bs-template='<div class="tooltip fs-xs mb-n2" role="tooltip"><div class="tooltip-inner bg-transparent text-body p-0"></div></div>'
						title="Telegram"
						aria-label="Follow us on Telegram"
					>
						<i className="ci-x" />
					</a>
					<a
						className="btn btn-icon fs-base btn-outline-secondary border-0"
						href="#!"
						data-bs-toggle="tooltip"
						data-bs-template='<div class="tooltip fs-xs mb-n2" role="tooltip"><div class="tooltip-inner bg-transparent text-body p-0"></div></div>'
						title="Pinterest"
						aria-label="Follow us on Pinterest"
					>
						<i className="ci-whatsapp" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

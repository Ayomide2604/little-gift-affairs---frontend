import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";
import useProductStore from "../stores/useProductStore";

const ProductScreen = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<div>
			<BreadCrumb />
			<h1 className="h3 container pb-3 pb-lg-4">Shop catalog</h1>
			<section className="container">
				<div className="row">
					<aside className="col-lg-3">
						<div
							className="offcanvas-lg offcanvas-start pe-lg-4"
							id="filterSidebar"
						>
							<div className="offcanvas-header py-3">
								<h5 className="offcanvas-title">Filter products</h5>
								<button
									aria-label="Close"
									className="btn-close"
									data-bs-dismiss="offcanvas"
									data-bs-target="#filterSidebar"
									type="button"
								/>
							</div>
							{/* product filters */}
							<div className="offcanvas-body flex-column pt-2 py-lg-0">
								<div className="accordion">
									<div className="accordion-item border-0 pb-1 pb-xl-2">
										<h4 className="accordion-header" id="headingCategories">
											<button
												aria-controls="categories"
												aria-expanded="true"
												className="accordion-button p-0 pb-3"
												data-bs-target="#categories"
												data-bs-toggle="collapse"
												type="button"
											>
												Categories
											</button>
										</h4>
										<div
											aria-labelledby="headingCategories"
											className="accordion-collapse collapse show"
											id="categories"
										>
											<div className="accordion-body p-0 pb-4 mb-1 mb-xl-2">
												<div
													data-simplebar=""
													data-simplebar-auto-hide="false"
													style={{
														height: "220px",
													}}
												>
													<ul className="nav flex-column gap-2 pe-3">
														<li className="nav-item mb-1">
															<a
																className="nav-link d-block fw-normal p-0"
																href="#!"
															>
																Nightwear
																<span className="fs-xs text-body-secondary ms-1">
																	(26)
																</span>
															</a>
														</li>
														<li className="nav-item mb-1">
															<a
																className="nav-link d-block fw-normal p-0"
																href="#!"
															>
																Shirts & Tops
																<span className="fs-xs text-body-secondary ms-1">
																	(164)
																</span>
															</a>
														</li>
														<li className="nav-item mb-1">
															<a
																className="nav-link d-block fw-normal p-0"
																href="#!"
															>
																Shorts
																<span className="fs-xs text-body-secondary ms-1">
																	(147)
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* end product filters */}
						</div>
					</aside>
					<div className="col-lg-9">
						<div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
							<div className="fs-sm text-body-emphasis text-nowrap">
								Found <span className="fw-semibold">32</span> items
							</div>
							{/* sort products */}
							<div className="d-flex align-items-center text-nowrap">
								<label className="form-label fw-semibold mb-0 me-2">
									Sort by:
								</label>
								<div
									style={{
										width: "190px",
									}}
								>
									<select
										className="form-select border-0 rounded-0 px-1"
										data-select='{                    "removeItemButton": false,                    "classNames": {                      "containerInner": ["form-select", "border-0", "rounded-0", "px-1"]                    }                  }'
									>
										<option value="Relevance">Relevance</option>
										<option value="Popularity">Popularity</option>
										<option value="Price: Low to High">
											Price: Low to High
										</option>
										<option value="Price: High to Low">
											Price: High to Low
										</option>
										<option value="Newest Arrivals">Newest Arrivals</option>
									</select>
								</div>
							</div>
							{/* end sort products */}
						</div>
						<div className="row gy-4 gy-md-5 pb-4 pb-md-5">
							{products && products.length > 0
								? products.map((product) => (
										<div
											key={product?.id}
											className="col-6 col-md-4 mb-2 mb-sm-3 mb-md-0"
										>
											<Product product={product} />
										</div>
								  ))
								: null}
						</div>
						<button
							className="btn btn-lg btn-outline-secondary w-100"
							type="button"
						>
							Show more
							<i className="ci-chevron-down fs-xl ms-2 me-n1" />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductScreen;

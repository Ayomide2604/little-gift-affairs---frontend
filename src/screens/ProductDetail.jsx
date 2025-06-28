import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../stores/useProductStore";
import getImageUrl from "../utils/getImageUrl";
import formatter from "../utils/currencyFormatter";

const ProductDetail = () => {
	const { id } = useParams();
	const { fetchProductById, product } = useProductStore();

	useEffect(() => {
		fetchProductById(id);
	}, [id]);
	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-6 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
						<div className="position-relative">
							<span className="badge text-bg-danger position-absolute top-0 start-0 z-2 mt-3 mt-sm-4 ms-3 ms-sm-4">
								Sale
							</span>
							<button
								aria-label="Add to Wishlist"
								className="btn btn-icon btn-secondary animate-pulse fs-lg bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-2 mt-sm-3 me-2 me-sm-3"
								data-bs-custom-class="tooltip-sm"
								data-bs-placement="top"
								data-bs-title="Add to Wishlist"
								data-bs-toggle="tooltip"
								type="button"
							>
								<i className="bi bi-heart animate-target" />
							</button>
							<a
								className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden mb-3 mb-sm-4 mb-md-3 mb-lg-4"
								data-gallery="product-gallery"
								data-glightbox=""
								href={getImageUrl(product, product?.images)}
							>
								<i className="bi-zoom hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
								<div
									className="ratio hover-effect-target bg-body-tertiary rounded"
									style={{
										"--cz-aspect-ratio": "calc(706 / 636 * 100%)",
									}}
								>
									<img
										alt="Image"
										src={getImageUrl(product, product?.images)}
									/>
								</div>
							</a>
						</div>
					</div>
					<div className="col-md-6">
						<div className="ps-md-4 ps-xl-5">
							<a
								className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3"
								href="#reviews"
							>
								<span className="text-body-tertiary fs-sm">23 reviews</span>
							</a>
							<h1 className="h3">{product?.name}</h1>
							{product?.description && (
								<p className="fs-sm mb-0">{product?.description}</p>
							)}

							<div className="h4 d-flex align-items-center my-4">
								{formatter.format(product?.price)}
								{/* <del className="fs-sm fw-normal text-body-tertiary ms-2">
									$156.00
								</del> */}
							</div>

							<div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
								<div className="count-input flex-shrink-0">
									<button
										aria-label="Decrement quantity"
										className="btn btn-icon btn-lg"
										data-decrement=""
										type="button"
									>
										<i className="bi bi-dash" />
									</button>
									<input
										className="form-control form-control-lg"
										defaultValue="1"
										min="1"
										readOnly
										type="number"
									/>
									<button
										aria-label="Increment quantity"
										className="btn btn-icon btn-lg"
										data-increment=""
										type="button"
									>
										<i className=" bi bi-plus" />
									</button>
								</div>
								<button className="btn btn-lg btn-dark w-100" type="button">
									Add to cart
								</button>
							</div>
							<ul className="list-unstyled gap-3 pb-3 pb-lg-4 mb-3">
								<li className="d-flex flex-wrap fs-sm">
									<span className="d-flex align-items-center fw-medium text-dark-emphasis me-2">
										<i className="bi bi-check-circle fs-base me-2" />
										Teddy Bear
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetail;

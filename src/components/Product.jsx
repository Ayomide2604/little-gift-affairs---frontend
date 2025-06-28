import React from "react";
import getImageUrl from "./../utils/getImageUrl";
import formatter from "./../utils/currencyFormatter";
const Product = ({ product }) => {
	return (
		<div className="animate-underline hover-effect-opacity">
			<div className="position-relative mb-3">
				<button
					aria-label="Add to Wishlist"
					className="btn btn-icon btn-secondary animate-pulse fs-base bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-1 mt-sm-2 me-1 me-sm-2"
					type="button"
				>
					<i className="ci-heart animate-target" />
				</button>
				<a
					className="d-flex bg-body-tertiary rounded p-3"
					href={`/shop/${product.id}`}
				>
					<div
						className="ratio"
						style={{
							"--cz-aspect-ratio": "calc(308 / 274 * 100%)",
						}}
					>
						<img
							alt="Image"
							src={getImageUrl(product, product?.images[0])}
							style={{ objectFit: "cover" }}
						/>
					</div>
				</a>
			</div>
			<div className="nav mb-2">
				<a
					className="nav-link animate-target min-w-0 text-dark-emphasis p-0"
					href={`/shop/${product.id}`}
				>
					<span className="text-truncate">{product?.name}</span>
				</a>
			</div>
			<div className="h6 mb-2">{formatter.format(product?.price)}</div>
		</div>
	);
};

export default Product;

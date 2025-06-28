import React from "react";
import Product from "../components/Product";
import ProductTabs from "../components/ProductTabs";

const FeaturedProducts = ({ products, collections }) => {
	return (
		<section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5 mt-5">
			<h2 className="text-center pb-2 pb-sm-3">Best Selling Gifts</h2>
			<div className="row g-0 overflow-x-auto pb-2 pb-sm-3 mb-3">
				<ProductTabs collections={collections} />
			</div>
			<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 gy-md-5 pb-xxl-3">
				{products && products.length > 0 ? (
					products.map((product) => (
						<div className="col mb-2 mb-sm-3 mb-md-0">
							<Product product={product} />
						</div>
					))
				) : (
					<p className="text-center">No products available</p>
				)}
			</div>
		</section>
	);
};

export default FeaturedProducts;

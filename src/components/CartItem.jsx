import React, { useState } from "react";
import getImageUrl from "../utils/getImageUrl";
import formatter from "./../utils/currencyFormatter";

const CartItem = ({ item, removeItem, updateQuantity }) => {
	return (
		<>
			<a className="flex-shrink-0" href="shop-product-fashion.html">
				<img
					src={getImageUrl(
						item?.expand?.product,
						item?.expand?.product?.images[0]
					)}
					className="bg-body-tertiary rounded"
					width="110"
					alt="Thumbnail"
				/>
			</a>
			<div className="w-100 min-w-0 ps-3">
				<h5 className="d-flex animate-underline mb-2">
					<a
						className="d-block fs-sm fw-medium text-truncate animate-target"
						href="shop-product-fashion.html"
					>
						{item?.expand?.product?.name}
					</a>
				</h5>
				<div className="h6 pb-1 mb-2">
					{formatter.format(item?.expand?.product?.price * item?.quantity)}
				</div>
				<div className="d-flex align-items-center justify-content-between">
					<div className="count-input rounded-2">
						<button
							type="button"
							className="btn btn-icon btn-sm"
							data-decrement=""
							aria-label="Decrement quantity"
							disabled={item?.quantity <= 1}
							onClick={() => updateQuantity(item?.id, item?.quantity - 1)}
						>
							<i className="ci-minus"></i>
						</button>
						<input
							type="number"
							className="form-control form-control-sm"
							value={item?.quantity}
							readOnly
						/>
						<button
							type="button"
							className="btn btn-icon btn-sm"
							data-increment=""
							aria-label="Increment quantity"
							onClick={() => updateQuantity(item?.id, item?.quantity + 1)}
						>
							<i className="ci-plus"></i>
						</button>
					</div>
					<button
						type="button"
						className="btn-close fs-sm"
						data-bs-toggle="tooltip"
						data-bs-custom-classname="tooltip-sm"
						data-bs-title="Remove"
						aria-label="Remove from cart"
						onClick={() => removeItem(item?.id)}
					></button>
				</div>
			</div>
		</>
	);
};

export default CartItem;

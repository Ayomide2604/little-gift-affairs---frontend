import React, { useEffect } from "react";
import useCartStore from "../stores/useCartStore";
import CartItem from "./CartItem";
import formatter from "../utils/currencyFormatter";
import EmptyCart from "./EmptyCart";

const CartModal = () => {
	const { getCart, items, removeFromCart, updateCart } = useCartStore();
	// const shippingFee = 3000;
	const subtotal = items.reduce(
		(sum, item) => sum + item?.expand?.product?.price * item.quantity,
		0
	);
	// const total = subtotal + shippingFee;

	useEffect(() => {
		getCart();
	}, []);
	return (
		<div
			className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
			id="shoppingCart"
			tabIndex="-1"
			aria-labelledby="shoppingCartLabel"
			style={{ width: "500px" }}
		>
			{/* <!-- Header --> */}
			<div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
				<div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
					<h4 className="offcanvas-title" id="shoppingCartLabel">
						Shopping cart
					</h4>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>

				<div
					className="progress w-100"
					role="progressbar"
					aria-label="Free shipping progress"
					aria-valuenow="78"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ height: "4px" }}
				>
					<div
						className="progress-bar bg-dark rounded-pill d-none-dark"
						style={{ width: "78%" }}
					></div>
					<div
						className="progress-bar bg-light rounded-pill d-none d-block-dark"
						style={{ width: "78%" }}
					></div>
				</div>
			</div>

			{/* <!-- Items --> */}
			<div className="offcanvas-body d-flex flex-column gap-4 pt-2">
				{/* <!-- Item --> */}
				{items && items?.length > 0 ? (
					items?.map((item) => (
						<div key={item?.id} className="d-flex align-items-center">
							<CartItem
								item={item}
								removeItem={removeFromCart}
								updateQuantity={updateCart}
							/>
						</div>
					))
				) : (
					<EmptyCart />
				)}
			</div>

			{/* <!-- Footer --> */}
			<div className="offcanvas-header flex-column align-items-start">
				<div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
					<span className="text-light-emphasis">Subtotal:</span>
					<span className="h6 mb-0">{formatter.format(subtotal)}</span>
				</div>
				<div className="d-flex w-100 gap-3">
					<a className="btn btn-lg btn-secondary w-100" href="#!">
						View cart
					</a>
					<a className="btn btn-lg btn-dark w-100" href="#!">
						Checkout
					</a>
				</div>
			</div>
		</div>
	);
};

export default CartModal;

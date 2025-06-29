import React from "react";

const EmptyCart = () => {
	return (
		<div className="text-center py-5 ">
			<img src={null} alt="Empty Cart" className="mb-4" width={100} />
			<h6 className="text-muted"> Your Cart is Empty</h6>
			<p>Looks like you haven't added anything yet.</p>
			<a href="/shop">Continue Shopping</a>
		</div>
	);
};

export default EmptyCart;

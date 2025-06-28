import React from "react";

const BreadCrumb = () => {
	return (
		<nav
			aria-label="breadcrumb"
			className="container pt-2 pt-xxl-3 my-3 my-md-4"
		>
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<a href="home-fashion-v1.html">Home</a>
				</li>
				<li aria-current="page" className="breadcrumb-item active">
					Catalog with sidebar filters
				</li>
			</ol>
		</nav>
	);
};

export default BreadCrumb;

import React from "react";

const ProductTabs = ({ collections }) => {
	return (
		<div className="col-auto pb-1 pb-sm-0 mx-auto">
			<ul className="nav nav-pills flex-nowrap text-nowrap">
				{collections &&
					collections.length > 0 &&
					collections.map((collection) => (
						<li className="nav-item" key={collection.id}>
							<a className="nav-link" href={`#${collection.id}`}>
								{collection.title}
							</a>
						</li>
					))}
			</ul>
		</div>
	);
};

export default ProductTabs;

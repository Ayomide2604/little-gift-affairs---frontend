import { useEffect } from "react";
import FeaturedProducts from "../pages/FeaturedProducts";
import Hero from "../pages/Hero";
import useCollectionStore from "../stores/useCollectionStore";
import useProductStore from "../stores/useProductStore";

const HomeScreen = () => {
	const { products, fetchProducts } = useProductStore();
	const { collections, fetchCollections } = useCollectionStore();

	useEffect(() => {
		fetchProducts();
		fetchCollections();
	}, []);
	return (
		<div>
			<Hero />
			<FeaturedProducts products={products} collections={collections} />
		</div>
	);
};

export default HomeScreen;

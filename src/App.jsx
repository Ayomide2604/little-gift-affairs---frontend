import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductScreen from "./screens/ProductScreen";
import ProductDetail from "./screens/ProductDetail";

function App() {
	return (
		<>
			<Header />
			<main class="content-wrapper">
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/shop" element={<ProductScreen />} />
					<Route path="/shop/:id" element={<ProductDetail />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

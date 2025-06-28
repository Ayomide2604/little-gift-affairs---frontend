import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<>
			<Header />
			<main class="content-wrapper">
				<Routes>
					<Route index element={<HomeScreen />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

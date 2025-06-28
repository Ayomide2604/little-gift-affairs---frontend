import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<>
			<Header />
			<div className="app">
				<Routes>
					<Route index element={<HomeScreen />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;

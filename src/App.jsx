import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<Header />
			<main class="content-wrapper">
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

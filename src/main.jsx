import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/theme.css";
import "./assets/css/cartzilla-icons.css";
import "simplebar-react/dist/simplebar.min.css";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
			<Toaster position="top-right" duration={2000} richColors />
		</BrowserRouter>
	</StrictMode>
);

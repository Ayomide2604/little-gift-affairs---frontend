import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import logo from "../assets/img/logo.png";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, loading } = useAuthStore();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		login({ email, password, navigate });
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div className="d-flex align-items-center justify-content-center min-vh-100 w-100">
			<div
				className="d-flex flex-column w-100 py-4 mx-auto"
				style={{ maxWidth: "416px" }}
			>
				{/* <!-- Logo --> */}
				<header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4 justify-content-center">
					<a
						href="/"
						className="navbar-brand pt-0 d-flex flex-column align-items-center w-100"
					>
						<span
							className="d-flex flex-shrink-0 text-primary me-2 align-items-center justify-content-center"
							style={{ height: 80 }}
						>
							<img
								src={logo}
								alt="logo"
								className="img-fluid"
								style={{
									maxHeight: 150,
									width: "auto",
									objectFit: "contain",
									display: "block",
									margin: "0 auto",
								}}
							/>
						</span>
						{/* Gift Shop */}
					</a>
				</header>

				<h1 className="h2 mt-auto ">Login</h1>
				<div className="nav fs-sm mb-4">
					Don't have an account?
					<a
						className="nav-link text-decoration-underline p-0 ms-2"
						href="/signup"
					>
						Create an account
					</a>
				</div>

				{/* <!-- Form --> */}
				<form className="needs-validation" onSubmit={handleLogin}>
					<div className="position-relative mb-4">
						<input
							type="email"
							className="form-control form-control-lg"
							placeholder="Email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<div className="password-toggle">
							<input
								type={showPassword ? "text" : "password"}
								className="form-control form-control-lg"
								placeholder="Password"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>

							<label
								className="password-toggle-button fs-lg"
								aria-label="Show/hide password"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<i className="bi bi-eye-slash" />
								) : (
									<i className="bi bi-eye" />
								)}
							</label>
						</div>
					</div>
					<div className="d-flex align-items-center justify-content-between mb-4">
						<div className="form-check me-2">
							<input
								type="checkbox"
								className="form-check-input"
								id="remember-30"
							/>
							<label htmlFor="remember-30" className="form-check-label">
								Remember for 30 days
							</label>
						</div>
						<div className="nav">
							<a
								className="nav-link animate-underline p-0"
								href="account-password-recovery.html"
							>
								<span className="animate-target">Forgot password?</span>
							</a>
						</div>
					</div>
					<button type="submit" className="btn btn-lg btn-dark w-100">
						Sign In
					</button>
				</form>

				{/* <!-- Divider --> */}
				<div className="d-flex align-items-center my-4">
					<hr className="w-100 m-0" />
					<span className="text-body-emphasis fw-medium text-nowrap mx-4">
						or continue with
					</span>
					<hr className="w-100 m-0" />
				</div>

				{/* <!-- Social login --> */}
				<div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
					<button
						type="button"
						className="btn btn-lg btn-outline-secondary w-100 px-2"
					>
						<i className="ci-google ms-1 me-1"></i>
						Google
					</button>
					<button
						type="button"
						className="btn btn-lg btn-outline-secondary w-100 px-2"
					>
						<i className="ci-facebook ms-1 me-1"></i>
						Facebook
					</button>
					<button
						type="button"
						className="btn btn-lg btn-outline-secondary w-100 px-2"
					>
						<i className="ci-apple ms-1 me-1"></i>
						Apple
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;

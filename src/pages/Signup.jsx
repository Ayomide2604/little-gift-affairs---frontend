import { useEffect, useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import logo from "../assets/img/logo.png";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const { user, register, loading } = useAuthStore();
	const navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();
		register(
			{
				firstName,
				lastName,
				email,
				password,
				passwordConfirm,
			},
			navigate
		);
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-2 px-md-4">
			<div
				className="card shadow border-0 w-100 mx-auto p-4 p-md-5 d-flex flex-column align-items-center"
				style={{ maxWidth: 520, background: "#fff", borderRadius: 18 }}
			>
				<header className="w-100 d-flex flex-column align-items-center mb-3">
					<a
						href="/"
						className="navbar-brand pt-0 d-flex flex-column align-items-center w-100 mb-2"
					>
						<img
							src={logo}
							alt="logo"
							className="img-fluid"
							style={{
								maxHeight: 100,
								width: "auto",
								objectFit: "contain",
							}}
						/>
					</a>
				</header>

				<h1 className="h3 fw-bold text-center mb-2">Create Account</h1>
				<div className="nav fs-sm mb-4 text-center">
					Already have an account?
					<a
						className="nav-link text-decoration-underline p-0 ms-2 d-inline"
						href="/login"
					>
						Login
					</a>
				</div>

				<form className="w-100" onSubmit={handleSignup} autoComplete="off">
					<div className="row g-3">
						<div className="col-12 col-md-6">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="First Name"
								required
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className="col-12 col-md-6">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Last Name"
								required
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className="mt-3">
						<input
							type="email"
							className="form-control form-control-lg mb-3"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="password-toggle position-relative mb-3">
							<input
								type={showPassword ? "text" : "password"}
								className="form-control form-control-lg"
								placeholder="Password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type="button"
								className="btn btn-link position-absolute end-0 top-50 translate-middle-y px-2"
								style={{ zIndex: 2 }}
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<i className="bi bi-eye-slash" />
								) : (
									<i className="bi bi-eye" />
								)}
							</button>
						</div>
						<div className="password-toggle position-relative mb-3">
							<input
								type={showConfirmPassword ? "text" : "password"}
								className="form-control form-control-lg"
								placeholder="Confirm Password"
								required
								value={passwordConfirm}
								onChange={(e) => setPasswordConfirm(e.target.value)}
							/>
							<button
								type="button"
								className="btn btn-link position-absolute end-0 top-50 translate-middle-y px-2"
								style={{ zIndex: 2 }}
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? (
									<i className="bi bi-eye-slash" />
								) : (
									<i className="bi bi-eye" />
								)}
							</button>
						</div>
						<button type="submit" className="btn btn-lg btn-dark w-100 mt-2">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;

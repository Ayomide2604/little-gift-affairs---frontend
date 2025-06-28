import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Topbar = () => {
	const [visible, setVisible] = useState(true);

	if (!visible) return null;

	return (
		<div className="alert alert-dismissible bg-dark text-white rounded-0 py-2 px-0 m-0 fade show">
			<div className="container position-relative d-flex min-w-0">
				<div
					className="d-flex flex-nowrap align-items-center g-2 w-100 min-w-0 mx-auto mt-n1"
					style={{ maxWidth: "458px" }}
				>
					<div className="nav me-2">
						<button
							type="button"
							className="nav-link fs-lg p-0"
							id="topbarPrev"
							aria-label="Prev"
						>
							<i className=" bi bi-chevron-left" />
						</button>
					</div>
					<Swiper
						modules={[Navigation, Autoplay]}
						spaceBetween={24}
						loop={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						navigation={{
							prevEl: "#topbarPrev",
							nextEl: "#topbarNext",
						}}
						className="fs-sm text-white swiper"
					>
						<SwiperSlide className="text-truncate text-center">
							🎉 Free Shipping on orders over $250.{" "}
							<span className="d-none d-sm-inline">Don't miss a discount!</span>
						</SwiperSlide>
						<SwiperSlide className="text-truncate text-center">
							💰 Money back guarantee.{" "}
							<span className="d-none d-sm-inline">
								We return money within 30 days.
							</span>
						</SwiperSlide>
						<SwiperSlide className="text-truncate text-center">
							💪 Friendly 24/7 customer support.{" "}
							<span className="d-none d-sm-inline">We've got you covered!</span>
						</SwiperSlide>
					</Swiper>
					<div className="nav ms-2">
						<button
							type="button"
							className="nav-link fs-lg p-0"
							id="topbarNext"
							aria-label="Next"
						>
							<i className=" bi bi-chevron-right" />
						</button>
					</div>
				</div>
				<button
					type="button"
					className="btn-close position-static flex-shrink-0 p-1 ms-3 ms-md-n4 "
					onClick={() => setVisible(false)}
					aria-label="Close"
				>
					{" "}
				</button>
			</div>
		</div>
	);
};

export default Topbar;

import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import Tilt from "../../../Logics/Tilt";
import useResponsive from "../../../Logics/Responsive";
import { UpdateBubbleCard } from "../../../Store/Actions/UpdateBubbleCard";
import exit from "../../../Static/Img/Icons/exit.svg";

import s from "./Style/Bubble.module.sass";

const Bubble = (props) => {
	const isMobile = useResponsive("(max-width: 450px)", true);
	const ref = useRef(null);

	const shadowBubble = `8px 8px 16px ${
		props.isCommercial ? "#BAE5D6" : "#F8C9D5"
	}, inset -8px -8px 16px ${props.isCommercial ? "#BAE5D6" : "#F8C9D5"}`;
	const shadowSmallBubble = `4px 4px 14px ${
		props.isCommercial ? "#BAE5D6" : "#F8C9D5"
	}, inset -4px -4px 14px ${props.isCommercial ? "#BAE5D6" : "#F8C9D5"}`;

	const [open, setOpen] = useState(false);

	const stylesContainer = {
		...props.style,
	};

	const stylesSliderContainer = {
		width: props.size,
		height: props.size,
		marginBottom: props.size < 300 && open ? "140px" : 0,
		boxShadow: props.size < 100 ? shadowBubble : shadowSmallBubble,
	};

	const settingsClose = {
		dots: false,
		arrows: false,
		slidesToShow: 1,
		autoplay: false,
		swipe: false,
		speed: 1000,
	};

	const settingsOpen = {
		dots: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
	};

	const stylesSliderOpen = {
		borderRadius: "12px",
		width: "300px",
		height: "300px",
		overflow: "hidden",
		boxShadow: props.size > 100 ? shadowBubble : shadowSmallBubble,
	};

	const stylesSliderClose = {
		borderRadius: "50%",
		width: props.size,
		height: props.size,
		overflow: "hidden",
		boxShadow: props.size > 100 ? shadowBubble : shadowSmallBubble,
	};

	useEffect(() => {
		if (props.someOneOpen === props.images) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [props.someOneOpen]);

	const setOpenFuc = () => {
		setOpen(true);
		props.setSomeOneOpen(props.images);
	};

	if (!open) {
		ref?.current?.slickGoTo(0);
	}

	return (
		<div className={s.container} key={props.key} style={stylesContainer}>
			<div className={s.sliderContainer} style={stylesSliderContainer}>
				{isMobile
					? props.images && (
							<>
								{open && (
									<div className={s.exit} onClick={() => setOpen(false)}>
										<img src={exit} alt="#" />
									</div>
								)}
								<div
									style={open ? stylesSliderOpen : stylesSliderClose}
									className={s.sliderBlock}>
									<Slider
										className={s.slider}
										{...(open ? settingsOpen : settingsClose)}
										style={{
											transform: open ? "rotate(0)" : "auto",
										}}>
										{props.images.map((e) => (
											<img src={e} alt="#" key={e} onClick={setOpenFuc} />
										))}
									</Slider>
								</div>
							</>
					  )
					: props.images && (
							<Tilt
								children={
									<>
										{" "}
										{open && (
											<div className={s.exit} onClick={() => setOpen(false)}>
												<img src={exit} alt="#" />
											</div>
										)}
										<div
											style={open ? stylesSliderOpen : stylesSliderClose}
											className={s.sliderBlock}>
											<Slider
												className={s.slider}
												{...(open ? settingsOpen : settingsClose)}
												style={{
													transform: open ? "rotate(0)" : "auto",
												}}
												ref={ref}>
												{props.images.map((e) => (
													<img src={e} alt="#" key={e} onClick={setOpenFuc} />
												))}
											</Slider>
										</div>
									</>
								}
							/>
					  )}
			</div>
			{open && props.cardData && (
				<div className={s.card}>
					<div className={s.textContainer}>
						<div className={s.textHeader}>
							<div
								className={s.title}
								style={{ color: props.isCommercial ? "#BAE5D6" : "#F8C9D5" }}>
								{props.cardData.title}
							</div>

							<div className={s.date}>
								{props.cardData.dateFrom} to {props.cardData.dateTo}
							</div>
						</div>

						<div className={s.text}>{props.cardData.text}</div>

						<div className={s.used}>Used: {props.cardData.used}</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		UpdateBubbleCard: (bubbleCard) => dispatch(UpdateBubbleCard(bubbleCard)),
	};
};

export default connect(null, mapDispatchToProps)(Bubble);

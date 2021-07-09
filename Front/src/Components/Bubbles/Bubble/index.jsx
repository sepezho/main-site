import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import Tilt from "../../../Logics/Tilt";
import useResponsive from "../../../Logics/Responsive";
import { UpdateBubbleCard } from "../../../Store/Actions/UpdateBubbleCard";
import exit from "../../../Static/Img/Icons/exit.svg";

import s from "./Style/Bubble.module.sass";

const Bubble = (props) => {
	// ЭТО КАКОЙ-ТО КОНКРЕТНЫЙ ГОВНОКОД, ИЗВИНИ
	// СОВЕТУЮ ВЫКЛЮЧИТЬ IDE ИЛИ УЙТИ СО СТРАНИЧКИ ГИТХАБА НАХЕР
	// ДАЖЕ НЕ ДУМАЙ ВНИКАТЬ В СУТЬ РАБОТЫ ЭТОГО КОДА!
	const isMobile = useResponsive("(max-width: 450px)", true);
	const isLaptop = useResponsive("(max-width: 1024px)", true);
	const ref = useRef(null);
	const tiltRef = useRef(null);

	const shadowBubble = `8px 8px 16px ${
		props.isCommercial ? "#BAE5D6" : "#F8C9D5"
	}, inset -8px -8px 16px ${props.isCommercial ? "#BAE5D6" : "#F8C9D5"}`;
	const shadowCard = `8px 8px 16px ${
		props.isCommercial ? "#BAE5D6" : "#F8C9D5"
	}`;

	const shadowSmallBubble = `4px 4px 14px ${
		props.isCommercial ? "#BAE5D6" : "#F8C9D5"
	}, inset -4px -4px 14px ${props.isCommercial ? "#BAE5D6" : "#F8C9D5"}`;

	const [open, setOpen] = useState(false);

	const stylesContainer = {
		...props.style,
	};

	const stylesContainerOpenMobile = {
		marginLeft: "0 !important",
		width: "80vw",
		position: "relative",
	};

	const stylesContainerOpenLaptop = {
		marginLeft: "0 !important",
		position: "relative",
	};

	const stylesSliderContainer = {
		width: open
			? !isMobile
				? "300px"
				: "80vw"
			: !isMobile
			? props.size
			: props.style.width,
		height: open
			? !isMobile
				? "300px"
				: "80vw"
			: !isMobile
			? props.size
			: props.style.height,
		// marginBottom:
		// props.size < 300 && open ? (props.size < 190 ? "170px" : "120px") : 0,
		// boxShadow: props.size < 100 ? shadowBubble : shadowSmallBubble,
		zIndex: open ? "1000" : "",
		position: "relative",
	};

	const settingsClose = {
		dots: false,
		arrows: false,
		slidesToShow: 1,
		// autoplay: props.autoplay,
		autoplay: true,
		autoplaySpeed: props.speed * 750,
		swipe: false,
		speed: 1000,
	};
	// console.log(settingsClose);
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
		transform: "translateZ(0)",
		width: !isMobile ? "300px" : "80vw",
		height: !isMobile ? "300px" : "80vw",
		overflow: "hidden",
		marginLeft: open && isLaptop && !isMobile ? "40px" : "",
		marginTop: "70px",
		boxShadow: props.size > 100 ? shadowBubble : shadowSmallBubble,
	};

	const stylesSliderClose = {
		borderRadius: "50%",
		transform: "translateZ(0)",
		width: !isMobile ? props.size : props.style.width,
		height: !isMobile ? props.size : props.style.height,
		overflow: "hidden",
		zIndex: "auto",

		boxShadow: props.size > 100 ? shadowBubble : shadowSmallBubble,
	};

	const stylesCardOpen = {
		boxShadow: shadowCard,
		margin:
			open && isLaptop
				? !isMobile
					? props.lastBubble
						? "24px 0 -128px 16px"
						: "24px 0 48px 16px"
					: props.lastBubble
					? "24px 0 -128px 0"
					: "24px 0 48px 0"
				: "",
		// 	props.size < 300
		// 	? props.size < 190
		// 		? "174px 24px 48px -24px"
		// 		: props.size < 200
		// 		? "134px 24px 48px -24px"
		// 		: "124px 24px 48px -24px"
		// 	: "24px 24px 48px -24px"
		// :
	};

	useEffect(() => {
		if (props.someOneOpen === props.images) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [props.someOneOpen]);

	useEffect(() => {
		ref?.current?.slickGoTo(0);
	}, [open]);

	const setOpenFuc = () => {
		setOpen(true);
		props.setSomeOneOpen(props.images);
	};

	if (!open) {
		if (tiltRef.current?.style) {
			tiltRef.current.parentElement.style.transform =
				"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
		}
	}

	return (
		<div
			className={s.container}
			key={props.key}
			style={
				open && isLaptop
					? isMobile
						? stylesContainerOpenMobile
						: stylesContainerOpenLaptop
					: stylesContainer
			}>
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
										ref={ref}
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
									<div ref={tiltRef}>
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
									</div>
								}
							/>
					  )}
			</div>
			{open && props.cardData && (
				<div className={s.card} style={stylesCardOpen}>
					<div className={s.textContainer}>
						<div className={s.textHeader}>
							<a
								href={props.cardData.link}
								className={s.title}
								style={{
									color: props.isCommercial ? "#BAE5D6" : "#F8C9D5",
									textDecoration: props.cardData.link ? "underline" : "none",
								}}>
								{props.cardData.title}
							</a>

							<div className={s.date}>
								From {props.cardData.dateFrom} To {props.cardData.dateTo}
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

import React, { useEffect, useState, useRef } from "react";
import Bubble from "./Bubble";
import useResponsive from "../../Logics/Responsive";
import {
	bubbles,
	laptopBubbles,
	mobileBubbles,
	smallBubbles,
	smallLaptopBubbles,
	smallMobileBubbles,
	bubblesLegend,
	mobileBubblesLegend,
} from "./bubblesData/";
// import debounce from "lodash/debounce";

import s from "./Style/Bubbles.module.sass";

const Bubbles = (props) => {
	const isLaptop = useResponsive("(max-width: 1024px)", true);
	const isMobile = useResponsive("(max-width: 450px)", true);
	const [bubblesData, updateBubblesData] = useState([
		...bubbles,
		// ...smallBubbles,
	]);
	const ref = useRef(null);
	// const [autoplay, setAutoplay] = useState(false);
	// console.log("autoplay: ", autoplay);
	const [someOneOpen, setSomeOneOpen] = useState(-1);

	// const listener = (e) => {
	// 	if (
	// 		window.scrollY > ref?.current?.offsetTop &&
	// 		window.scrollY < ref?.current?.offsetHeight + ref?.current?.offsetTop
	// 	) {
	// 		setAutoplay(true);
	// 	} else {
	// 		setAutoplay(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", debounce(listener, 200));
	// 	return () => window.removeEventListener("scroll", listener);
	// });

	useEffect(
		() =>
			updateBubblesData(
				isLaptop
					? isMobile
						? [
								...mobileBubbles,
								// ...smallMobileBubbles
						  ]
						: [
								...laptopBubbles,
								// ...smallLaptopBubbles
						  ]
					: [
							...bubbles,
							// ...smallBubbles
					  ]
			),
		[isLaptop, isMobile]
	);
	let i = 20;
	return (
		<div className={s.container} ref={ref}>
			<div className={s.bubblesContainer}>
				{/* <div className={s.workedOn}>
					<div className={s.bubblesLegend}>
					 {(!isLaptop ? bubblesLegend : mobileBubblesLegend)
							.slice(0, 2)
							.map((e) => (
								<Bubble {...e} />
							))} 
					</div>
					<span>Коммерция</span>
				</div> */}

				{bubblesData.map((e) => (
					<Bubble
						{...e}
						speed={i++}
						setBubbleCardOpen={props.setBubbleCardOpen}
						setSomeOneOpen={setSomeOneOpen}
						someOneOpen={someOneOpen}

						// autoplay={autoplay}
					/>
				))}

				{/* <div className={s.myWorks}>
					<div className={s.bubblesLegend}>
						 {(!isLaptop ? bubblesLegend : mobileBubblesLegend)
							.slice(2)
							.map((e) => (
								<Bubble {...e} />
							))} 
					</div>
					<span>Pet-проекты</span>
				</div> */}
			</div>

			<div className={s.title}>PROJECTS</div>
		</div>
	);
};

export default Bubbles;

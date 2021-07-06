import React, { useEffect, useState } from "react";
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

import s from "./Style/Bubbles.module.sass";

const Bubbles = (props) => {
	const isLaptop = useResponsive("(max-width: 1024px)", true);
	const isMobile = useResponsive("(max-width: 450px)", true);
	const [bubblesData, updateBubblesData] = useState([
		...bubbles,
		// ...smallBubbles,
	]);

	const [someOneOpen, setSomeOneOpen] = useState(-1);

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

	return (
		<div className={s.container}>
			<div className={s.bubblesContainer}>
				<div className={s.workedOn}>
					<div className={s.bubblesLegend}>
						{(!isLaptop ? bubblesLegend : mobileBubblesLegend)
							.slice(0, 2)
							.map((e) => (
								<Bubble {...e} />
							))}
					</div>
					<span>Коммерция</span>
				</div>

				{bubblesData.map((e) => (
					<Bubble
						{...e}
						setBubbleCardOpen={props.setBubbleCardOpen}
						setSomeOneOpen={setSomeOneOpen}
						someOneOpen={someOneOpen}
					/>
				))}

				<div className={s.myWorks}>
					<div className={s.bubblesLegend}>
						{(!isLaptop ? bubblesLegend : mobileBubblesLegend)
							.slice(2)
							.map((e) => (
								<Bubble {...e} />
							))}
					</div>
					<span>Pet-проекты</span>
				</div>
			</div>

			<div className={s.title}>PROJECTS</div>
		</div>
	);
};

export default Bubbles;

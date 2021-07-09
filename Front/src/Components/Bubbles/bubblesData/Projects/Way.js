import Cover from "../../../../Static/Img/Portfolio/Way/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/Way/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/Way/Slide2.png";

const data = {
	key: 5,
	images: [Cover, Slide1, Slide2],
	isCommercial: false,
	size: 150,
	cardData: {
		dateFrom: "",
		dateTo: "",
		title: "Way",
		text: (
			<div>
				Самописный алгоритм нахождения пути от одной точки до другой, обходя
				препятствия, написан на canvas. Без серверной части.
				<br />
				<br />
				P.S подробнее об этом проекте можешь почтить в{" "}
				<a
					href="https://t.me/sepezho_log/643"
					style={{ textDecoration: "underline" }}>
					тлеге
				</a>{" "}
			</div>
		),
		used: "jQuery; Canvas",
		link: "https://t.me/sepezho_log/643",
	},
};

export default data;

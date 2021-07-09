import Cover from "../../../../Static/Img/Portfolio/GameOfLife/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/GameOfLife/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/GameOfLife/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/GameOfLife/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/GameOfLife/Slide4.png";

const data = {
	key: 7,
	images: [Cover, Slide4, Slide1, Slide2, Slide3],
	isCommercial: false,
	size: 200,
	cardData: {
		dateFrom: "May 2019",
		dateTo: "May 2019",
		title: "GameOfLife",
		text: (
			<div>
				Стандартная игра жизнь, базируется на canvas. Является одним из первых
				веб-приложений. Тогдя я начинал постигать js (и jQuery). Без серверной
				части.
				<br />
				<br />
				P.S подробнее об этом проекте можешь почтить в{" "}
				<a
					href="https://t.me/sepezho_log/645"
					style={{ textDecoration: "underline" }}>
					тлеге
				</a>{" "}
			</div>
		),
		used: "jQuery; Canvas",
		link: "https://t.me/sepezho_log/645",
	},
};

export default data;

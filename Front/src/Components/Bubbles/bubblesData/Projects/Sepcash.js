import Cover from "../../../../Static/Img/Portfolio/SepCash/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/SepCash/Slide1.png";

const data = {
	key: 9,
	images: [Cover, Slide1],
	isCommercial: false,
	size: 200,
	cardData: {
		dateFrom: "?",
		dateTo: "?",
		title: "Sepcash",
		text: (
			<div>
				Soon...
				<br />
				<br />
				Попозже напишу об этом проекте.
				<br />
				<br />
				P.S Возможно когда-нибудь пост будет в{" "}
				<a
					href="https://t.me/sepezho_log"
					style={{ textDecoration: "underline" }}>
					телеге
				</a>
				.
			</div>
		),
		used: "Redux; Webpack; Router; React; Ts; Sass modules and etc",
		links: [],
	},
};

export default data;

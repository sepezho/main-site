import Cover from "../../../../Static/Img/Portfolio/WebStap/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/WebStap/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/WebStap/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/WebStap/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/WebStap/Slide4.png";
import Slide5 from "../../../../Static/Img/Portfolio/WebStap/Slide5.png";

const data = {
	key: 1,
	images: [Cover, Slide1, Slide2, Slide3, Slide4, Slide5],
	isCommercial: true,
	size: 300,
	cardData: {
		dateFrom: "Oct 2020",
		dateTo: "Dec 2020",
		title: "Web Stap",
		text: (
			<div>
				Это сайт-визитка для одной команды разработчиков. Сам сайт (хоть и
				является одностраничником) достаточно сложен по части логики. В этом
				проекте реализовано много логики для анимаций / переходов между слайдами
				/ разного рода интерактивных элементов. Занимался этим проектом порядка
				2х месяцев, за это время втянулся в проект, решил уйму возникших на тот
				момент проблем, после чего начал вносить новую логику. Сайдбар/кнопки,
				переписал логику переключения слайдов, переписал множество стилей,
				занимался мобильной версией сайта.
			</div>
		),
		used: "Gatsby; TypeScript; SC",
		link: "https://gtosss.github.io",
	},
};

export default data;

import WebStapCover from "../../../../Static/Img/Portfolio/WebStapCover.png";

const data = {
	key: 1,
	images: [WebStapCover, WebStapCover, WebStapCover, WebStapCover],
	isCommercial: true,
	size: 300,
	cardData: {
		dateFrom: "",
		dateTo: "",
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
		used: "Gatsby; TypeScript; GraphQl; Styled-components; Figma",
		links: [],
	},
};

export default data;

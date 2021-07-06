import PortfolioCover from "../../../../Static/Img/Portfolio/PortfolioCover.png";

const data = {
	key: 8,
	images: [PortfolioCover],
	isCommercial: false,
	size: 300,
	cardData: {
		dateFrom: "",
		dateTo: "",
		title: "Portfolio",
		text: (
			<div>
				Сайт, на котором вы сейчас находитесь, второй по масштабам проект. Бэк
				на NodeJs, фронт на React + sass. Бэкенд каждые 10 минут спрашивает мой
				gitHub о новых коммитах, репозитроиях и т.д. Запоминает все это в БД
				(MYSQL). Так же ловит и хранит информацию, которую принимает с фронта. В
				добавок может отправлять письма через google smtp. Фронт же, работает
				только с API и ничего больше не трогает. Как вы уже могли заметить, он
				построен по принципу SPA.
			</div>
		),
		used: "React; Sass; NodeJs; Nginx; MYSQL",
		links: [],
	},
};

export default data;

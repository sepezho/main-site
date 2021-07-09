// PumpyFarm
import Cover from "../../../../Static/Img/Portfolio/Portfolio/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/Portfolio/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/Portfolio/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/Portfolio/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/Portfolio/Slide4.png";
import Slide5 from "../../../../Static/Img/Portfolio/Portfolio/Slide5.png";

const data = {
	key: 8,
	images: [Cover, Slide5, Slide1, Slide4, Slide3, Slide2],
	isCommercial: false,
	size: 300,
	cardData: {
		dateFrom: "Apr 2019",
		dateTo: "Jan 2020",
		title: "Portfolio",
		text: (
			<div>
				Мой сарый сайт. На тот момент был весьма большой проект. Бэк на NodeJs,
				фронт на React + sass. Бэкенд каждые 10 минут спрашивает мой gitHub о
				новых коммитах, репозитроиях и т.д. Запоминает все это в БД (MYSQL). Так
				же ловит и хранит информацию, которую принимает с фронта. В добавок
				может отправлять письма через google smtp. Фронт же, работает только с
				API и ничего больше не трогает. Как вы уже могли заметить, он построен
				по принципу SPA.
				<br />
				<br />
				P.S подробнее об этом проекте можешь почтить в{" "}
				<a
					href="https://t.me/sepezho_log/657"
					style={{ textDecoration: "underline" }}>
					тлеге
				</a>{" "}
			</div>
		),
		used: "React; Sass; NodeJs; Nginx; MYSQL",
		link: "https://portfolio.sepezho.com",
	},
};

export default data;

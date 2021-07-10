import Cover from "../../../../Static/Img/Portfolio/Clicker/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/Clicker/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/Clicker/Slide2.png";

const data = {
	key: 6,
	images: [Cover, Slide1, Slide2],
	isCommercial: false,
	size: 190,
	cardData: {
		dateFrom: "May 2019",
		dateTo: "Aug 2019",
		title: "Clicker",
		text: (
			<div>
				Веб-игра кликер, с системой регистрации (при помощи проверки почты),
				входа и, соответственно, сохранением игровых данных на сервере в базе
				данных. Прикрутил чат, построенный на защищенных вебсокетах (wss),
				подвязывал при помощи workerman. Использовал composer для php. Проект
				закинул на полпути, т.к. он становился слишком громоздким. У него был
				потенциал, но я был слишком "зелен" для таких обьемов работы...
				<br />
				<br />
				P.S подробнее об этом проекте можешь почтить в{" "}
				<a
					href="https://t.me/sepezho_log/645"
					style={{ textDecoration: "underline" }}>
					телеге
				</a>{" "}
			</div>
		),
		used: "jQuery; PHP; MYSQL; WSS; Workerman",
		link: "https://t.me/sepezho_log/645",
	},
};

export default data;

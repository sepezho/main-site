import ClickerCover from "../../../../Static/Img/Portfolio/ClickerCover.png";

const data = {
	key: 6,
	images: [ClickerCover],
	isCommercial: false,
	size: 190,
	cardData: {
		dateFrom: "",
		dateTo: "",
		title: "Clicker",
		text: (
			<div>
				Веб-игра кликер, с системой регистрации (при помощи проверки почты),
				входа и, соответственно, сохранением игровых данных на сервере в базе
				данных. Прикрутил чат, построенный на защищенных вебсокетах (wss),
				подвязывал при помощи workerman. Использовал composer для php. Проект
				закинул на полпути, т.к. он становился слишком громоздким. У него был
				потенциал, но я был слишком "зелен" для таких обьемов работы...
			</div>
		),
		used: "",
		links: [],
	},
};

export default data;

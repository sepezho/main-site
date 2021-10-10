import Cover from "../../../../Static/Img/Portfolio/Seppass/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/Seppass/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/Seppass/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/Seppass/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/Seppass/Slide4.png";
import Slide5 from "../../../../Static/Img/Portfolio/Seppass/Slide5.png";
import Slide6 from "../../../../Static/Img/Portfolio/Seppass/Slide6.png";

const data = {
	key: 10,
	images: [Cover, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6],
	isCommercial: false,
	lastBubble: true,
	size: 200,
	cardData: {
		dateFrom: "Jan 2020",
		dateTo: "May 2020",
		title: "Crypto transfer",
		text: (
			<div>
				Телеграм бот предназначен для хранения паролей и других записей. Создал
				бота для себя просто потому что было интересно. Сейчас же приостановил
				этот проект, т.к. довел его до рабочего состояния, и дальше развивать
				его одному очень сложно. Каждому пользователю при регистрации создается
				уникальный gpg-ключ. Пароль хранится у юзера, а значит даже при утечке
				данных, расшифровать их не получится ни-ко-му. Так же бот умеет
				автоматически подвязываться к gitHub пользователя, и синхронизировать
				все данные из папки юзера с git-системой.
				<br />
				<br />
				P.S Сверстал под него сайт, на который ведет эта{" "}
				<a
					href="https://seppass.sepezho.com/"
					style={{ textDecoration: "underline" }}>
					ссылка
				</a>{" "}
			</div>
		),
		used: "Python3; Telebot; Python-GnuPG; GitPython; SQLite",
		link: "https://t.me/seppass_bot",
	},
};

export default data;

import Cover from "../../../../Static/Img/Portfolio/BoosterGames/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/BoosterGames/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/BoosterGames/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/BoosterGames/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/BoosterGames/Slide4.png";

const data = {
	key: 2,
	images: [Cover, Slide1, Slide2, Slide3, Slide4],
	isCommercial: true,
	size: 300,
	cardData: {
		dateFrom: "May 2020",
		dateTo: "June 2020",
		title: "Booster.games",
		text: (
			<div>
				Это сайт, который является посредником между бустерами и обычными
				пользователями. Я был intern frontend разработчиком, постигал основы
				Next TypeScript Eslint GraphQl+Apollo и уйму других для меня (на тот
				момент) новых технологий. Научился создавать грамотный, эластичный
				фронт. Работая с этими ребятами, я занимался созданием персональных
				страниц (с использованием вышеперечисленных технологий) по макетам с
				Figma, которые отображаются только в профиле пользователя, так что
				просто перейдя на сайт, мох трудов не увидеть :/
			</div>
		),
		used: "Next; TypeScript; Eslint; GraphQl; Apollo; Figma",
		link: "https://booster.games",
	},
};

export default data;

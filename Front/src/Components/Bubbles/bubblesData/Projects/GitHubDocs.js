import Cover from "../../../../Static/Img/Portfolio/GitHubDocs/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/GitHubDocs/Slide1.png";

const data = {
	key: 4,
	images: [Cover, Slide1],
	isCommercial: true,
	size: 150,
	cardData: {
		dateFrom: "Sep 2020",
		dateTo: "Sep 2020",
		title: "GitHub Docs",
		text: (
			<div>
				Open Source проект, в котором я принял участие. Занимался решением
				конкретных тасков, за обговоренную плату. Сам проект представляет из
				себя web-приложение, для просмотра и редактирования файлов в репозитории
				юзера на GitHub. Проект построен на React + TS + Webpack и Pcss и уйме
				обвязки к этому стэку. В нем я работал над стилями, а так же написал
				логику commit changes через API GitHub, при сохранении изменений файла.
			</div>
		),
		used: "React; Redux; TypeScript; Webpack; Pcss",
		link: "https://github.com/StaroKep/github-docs",
	},
};

export default data;

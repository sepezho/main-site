import GitDocksCover from "../../../../Static/Img/Portfolio/GitDocksCover.png";

const data = {
	key: 4,
	images: [GitDocksCover],
	isCommercial: true,
	size: 150,
	cardData: {
		dateFrom: "",
		dateTo: "",
		title: "GitDocksCover",
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
		used: "React; TypeScript; Webpack; Pcss",
		links: [],
	},
};

export default data;

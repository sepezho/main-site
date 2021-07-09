// PumpyFarm
import Cover from "../../../../Static/Img/Portfolio/PumpyFarm/Cover.png";
import Slide1 from "../../../../Static/Img/Portfolio/PumpyFarm/Slide1.png";
import Slide2 from "../../../../Static/Img/Portfolio/PumpyFarm/Slide2.png";
import Slide3 from "../../../../Static/Img/Portfolio/PumpyFarm/Slide3.png";
import Slide4 from "../../../../Static/Img/Portfolio/PumpyFarm/Slide4.png";
import Slide5 from "../../../../Static/Img/Portfolio/PumpyFarm/Slide5.png";

const data = {
	key: 0,
	images: [Cover, Slide1, Slide2, Slide3, Slide4, Slide5],
	isCommercial: true,
	size: 300,
	cardData: {
		dateFrom: "Mar 2021",
		dateTo: "May 2021",
		title: "Pumpy.farm",
		text: (
			<div>
				Pumpy - это Yield агрегатор. Попал я в этот стартап на самых первых
				парах развития. Какое-то время все фичи (и фиксы) на фронте были на мне,
				работы было много). Работал над сложной логикой (так как это уже не
				просто статический сайт, а настоящее веб приложение).
				<br />
				<br />
				Когда я начинал работу вся логистика начиналась и заканчивалась в лс
				между мной и нынешним техлидом. Прямо на моих глазах стартап рос:
				собиралась команда, разрабатывалась бизнес логика, строилась вся
				коммуникация. В добавок, так сложились обстоятельства, что второй
				фронтендер, который появился в комманде разработчиков - был мой
				знакомый. Он обратился с просьбой, я помог "пристроить" :) Сейчас это
				большая комманда с PM, тестировщиками, разрабами и тд... с каналами и
				беседами.
				<br />
				<br />
				Как так получилось, что я в итоге остался за бортом этого взлетающего
				стартапа? Это сэд стори... Спрашивай, расскажу.
			</div>
		),
		used: "React; Redux; Router; Web3; TypeScript",
		link: "https://pumpy.farm",
	},
};

export default data;

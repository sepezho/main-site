// PumpyFarm
import PumpyFarmCover from '../../../../../Static/Img/Portfolio/PumpyFarm/Cover.png';
import PumpyFarmSlide1 from '../../../../../Static/Img/Portfolio/PumpyFarm/Slide1.png';
import PumpyFarmSlide2 from '../../../../../Static/Img/Portfolio/PumpyFarm/Slide2.png';
import PumpyFarmSlide3 from '../../../../../Static/Img/Portfolio/PumpyFarm/Slide3.png';
import PumpyFarmSlide4 from '../../../../../Static/Img/Portfolio/PumpyFarm/Slide4.png';
import PumpyFarmSlide5 from '../../../../../Static/Img/Portfolio/PumpyFarm/Slide5.png';

export default {
  key: 0,
  cover: PumpyFarmCover,
  isCommercial: true,
  size: 300,
  cardData: {
    images: [PumpyFarmCover, PumpyFarmSlide1, PumpyFarmSlide2, PumpyFarmSlide3, PumpyFarmSlide4, PumpyFarmSlide5],
    dateFrom: '15.03.2021',
    dateTo: '04.05.2021',
    title: 'Pumpy.farm',
    text: <div>
      Pumpy - это Yield агрегатор. Попал я в этот стартап на самых первых парах развития.
      Какое-то время все фичи (и фиксы) на фронте были на мне, работы было много). Работал
      над сложной логикой (так как это уже не просто статический сайт, а настоящее веб приложение).
      <br /><br />
      Когда я начинал работу вся логистика начиналась и заканчивалась
      в лс между мной и нынешним техлидом.
      Прямо на моих глазах стартап рос: собиралась команда, разрабатывалась бизнес логика, строилась вся коммуникация.
      В добавок, так сложились обстоятельства, что второй фронтендер, который появился в комманде разработчиков - был мой знакомый.
      Он обратился с просьбой, я помог "пристроить" :)
      Сейчас это большая комманда с PM, тестировщиками, разрабами и тд... с каналами и беседами.
      <br /><br />
      Как так получилось, что я в итоге остался за бортом этого взлетающего стартапа?
      Это сэд стори... Спрашивай, расскажу.
    </div>,
    used: 'React; Redux; Web3; TypeScript',
    links: ['https://pumpy.farm'],
  }
}
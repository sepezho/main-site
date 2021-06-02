import PumpyFarmCover from '../../../Static/Img/Portfolio/PumpyFarmCover.png';
import WebStapCover from '../../../Static/Img/Portfolio/WebStapCover.png';
import AdminPanelCover from '../../../Static/Img/Portfolio/AdminPanelCover.png';
import BoosterGamesCover from '../../../Static/Img/Portfolio/BoosterGamesCover.png';
import GitDocksCover from '../../../Static/Img/Portfolio/GitDocksCover.png';
import GameOfLifeCover from '../../../Static/Img/Portfolio/GameOfLifeCover.png';
import SeppassCover from '../../../Static/Img/Portfolio/SeppassCover.png';
import PortfolioCover from '../../../Static/Img/Portfolio/PortfolioCover.png';
import WayCover from '../../../Static/Img/Portfolio/WayCover.png';
import ClickerCover from '../../../Static/Img/Portfolio/ClickerCover.png';
import SepCashCover from '../../../Static/Img/Portfolio/SepCashCover.png';

const bubblesData = [
  {key: 0, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '0 310px 0 0'}},
  {key: 1, cover: WebStapCover, isCommercial: true, size: 300, style: {margin: '90px 0 0 310px'}},
  {key: 2, cover: BoosterGamesCover, isCommercial: true, size: 300, style: {margin: '310px 150px 0 0'}},
  {key: 3, cover: AdminPanelCover, isCommercial: true, size: 200, style: {margin: '397.5px 0 0 385px'}},
  {key: 4, cover: GitDocksCover, isCommercial: true, size: 150, style: {margin: '570px 0 0 160px'}},
  {key: 5, cover: ClickerCover, isCommercial: false, size: 190, style: {margin: '600px 0 0 505px'}},
  {key: 6, cover: WayCover, isCommercial: false, size: 150, style: {margin: '621px 167px 0 0'}},
  {key: 7, cover: GameOfLifeCover, isCommercial: false, size: 200, style: {margin: '544px 522px 0 0'}},
  {key: 8, cover: PortfolioCover, isCommercial: false, size: 300, style: {margin: '730px 0 0 150px'}},
  {key: 9, cover: SepCashCover, isCommercial: false, size: 200, style: {margin: '745px 388px 0 0'}},
  {key: 10, cover: SeppassCover, isCommercial: false, size: 300, style: {margin: '952px 304px 0 0'}},
]

const bubblesStyle = [
  {margin: '0 310px 0 0'},
  {margin: '90px 0 0 310px'},
  {margin: '310px 150px 0 0'},
  {margin: '397.5px 0 0 385px'},
  {margin: '570px 0 0 160px'},
  {margin: '600px 0 0 505px'},
  {margin: '621px 167px 0 0'},
  {margin: '544px 522px 0 0'},
  {margin: '730px 0 0 150px'},
  {margin: '745px 388px 0 0'},
  {margin: '952px 304px 0 0'},
]

const compressedBubblesStyle = [
  {margin: '0 300px 0 0'},
  {margin: '80px 0 0 300px'},
  {margin: '300px 140px 0 0'},
  {margin: '387.5px 0 0 375px'},
  {margin: '560px 0 0 150px'},
  {margin: '590px 0 0 495px'},
  {margin: '611px 157px 0 0'},
  {margin: '534px 512px 0 0'},
  {margin: '720px 0 0 140px'},
  {margin: '735px 378px 0 0'},
  {margin: '942px 294px 0 0'},
]

const mobileBubblesStyle = [
  {margin: '0 0 0 70px'},
  {margin: '300px 70px 0 0'},
  {margin: '610px 0 0 50px'},
  {margin: '920px 0 0 150px'},
  {margin: '890px 220px 0 0'},
  {margin: '1060px 170px 0 0'},
  {margin: '1190px 0 0 160px'},
  {margin: '1260px 180px 0 0'},
  {margin: '1590px 70px 0 0'},
  {margin: '1400px 0 0 170px'},
  {margin: '1890px 0 0 70px'},
]

export const bubbles = bubblesData.map(e => {
  let newE = {...e}
  newE.style = bubblesStyle[newE.key]
  return newE
})

export const compressedBubbles = bubblesData.map(e => {
  let newE = {...e}
  newE.style = compressedBubblesStyle[newE.key]
  return newE
})

export const mobileBubbles = bubblesData.map(e => {
  let newE = {...e}
  newE.style = mobileBubblesStyle[newE.key]
  return newE
})

export const smallBubbles =  [
  {key: 11, cover: false, isCommercial: true, size: 70, style: {margin: '320px 530px 0 0'}},
  {key: 12, cover: false, isCommercial: true, size: 50, style: {margin: '420px 730px 0 0'}},
  {key: 13, cover: false, isCommercial: true, size: 30, style: {margin: '400px 0 0 790px'}},
  {key: 14, cover: false, isCommercial: false, size: 30, style: {margin: '820px 780px 0 0'}},
  {key: 15, cover: false, isCommercial: false, size: 50, style: {margin: '1130px 0 0 230px'}},
  {key: 16, cover: false, isCommercial: false, size: 70, style: {margin: '930px 0 0 700px'}},
]

export const compressedSmallBubbles = [
  {key: 11, cover: false, isCommercial: true, size: 60, style: {margin: '300px 500px 0 0'}},
  {key: 12, cover: false, isCommercial: true, size: 40, style: {margin: '400px 650px 0 0'}},
  {key: 13, cover: false, isCommercial: true, size: 25, style: {margin: '380px 0 0 700px'}},
  {key: 14, cover: false, isCommercial: false, size: 25, style: {margin: '800px 750px 0 0'}},
  {key: 15, cover: false, isCommercial: false, size: 40, style: {margin: '1100px 0 0 200px'}},
  {key: 16, cover: false, isCommercial: false, size: 60, style: {margin: '900px 0 0 650px'}},
]

export const smallMobileBubbles =  [
  {key: 11, cover: false, isCommercial: true, size: 70, style: {margin: '230px 260px 0 0'}},
  {key: 12, cover: false, isCommercial: true, size: 50, style: {margin: '580px 0 0 280px'}},
  {key: 13, cover: false, isCommercial: true, size: 30, style: {margin: '840px 260px 0 0'}},
  {key: 14, cover: false, isCommercial: false, size: 30, style: {margin: '1140px 0 0 180px'}},
  {key: 15, cover: false, isCommercial: false, size: 50, style: {margin: '1840px 0 0 250px'}},
  {key: 16, cover: false, isCommercial: false, size: 70, style: {margin: '1500px 200px 0 0'}},
]

export const bubblesLegend = [
  {key: 0, cover: false, isCommercial: true, size: 24, style: {margin: '0px 0 0 105px', transform: 'rotate(-45deg)'}},
  {key: 1, cover: false, isCommercial: true, size: 35, style: {margin: '-10px 0 0 30px', transform: 'rotate(-45deg)'}},
  {key: 2, cover: false, isCommercial: false, size: 28, style: {margin: '0 0 0 120px', transform: 'rotate(45deg)'}},
  {key: 3, cover: false, isCommercial: false, size: 30, style: {margin: '-15px 0 0 14px', transform: 'rotate(45deg)'}},
]

export const mobileBubblesLegend = [
  {key: 0, cover: false, isCommercial: true, size: 24, style: {margin: '0px 0 0 105px', transform: 'rotate(45deg)'}},
  {key: 1, cover: false, isCommercial: true, size: 35, style: {margin: '-10px 0 0 30px', transform: 'rotate(45deg)'}},
  {key: 2, cover: false, isCommercial: false, size: 28, style: {margin: '0 0 0 120px', transform: 'rotate(-45deg)'}},
  {key: 3, cover: false, isCommercial: false, size: 30, style: {margin: '-15px 0 0 14px', transform: 'rotate(-45deg)'}},
]
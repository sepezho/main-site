
import AdminPanelCover from '../../../../Static/Img/Portfolio/AdminPanelCover.png';
import BoosterGamesCover from '../../../../Static/Img/Portfolio/BoosterGamesCover.png';
import GitDocksCover from '../../../../Static/Img/Portfolio/GitDocksCover.png';
import GameOfLifeCover from '../../../../Static/Img/Portfolio/GameOfLifeCover.png';
import SeppassCover from '../../../../Static/Img/Portfolio/SeppassCover.png';
import PortfolioCover from '../../../../Static/Img/Portfolio/PortfolioCover.png';
import WayCover from '../../../../Static/Img/Portfolio/WayCover.png';
import ClickerCover from '../../../../Static/Img/Portfolio/ClickerCover.png';
import SepCashCover from '../../../../Static/Img/Portfolio/SepCashCover.png';

import Pumpy from './Projects/PumpyFarm'
import WebStap from './Projects/WebStap'

const bubblesData = [
  Pumpy,
  WebStap,
  {
    key: 2,
    cover: BoosterGamesCover,
    isCommercial: true,
    size: 300,
    cardData: {
      images: [BoosterGamesCover],
      dateFrom: '',
      dateTo: '',
      title: 'Booster.games',
      text: <div>
        Это сайт, который является посредником между бустерами и обычными пользователями.
        Я был intern frontend разработчиком, постигал основы Next TypeScript Eslint GraphQl+Apollo
        и уйму других для меня (на тот момент) новых технологий. Научился создавать грамотный,
        эластичный фронт. Работая с этими ребятами, я занимался созданием персональных
        страниц (с использованием вышеперечисленных технологий) по макетам с Figma, которые
        отображаются только в профиле пользователя, так что просто перейдя на сайт, мох трудов не увидеть :/
      </div>,
      used: 'Next; TypeScript; Eslint; GraphQl; Apollo; Figma',
      links: [],
    }
  },
  {
    key: 3,
    cover: AdminPanelCover,
    isCommercial: true,
    size: 200,
    cardData: {
      images: [AdminPanelCover],
      dateFrom: '',
      dateTo: '',
      title: 'Admin panel',
      text: <div>
        AdminPanelCover
      </div>,
      used: 'Next; TypeScript; Eslint; GraphQl; Apollo; Figma',
      links: [],
    }
  },
  {
    key: 4,
    cover: GitDocksCover,
    isCommercial: true,
    size: 150,
    cardData: {
      images: [GitDocksCover],
      dateFrom: '',
      dateTo: '',
      title: 'GitDocksCover',
      text: <div>
        Open Source проект, в котором я принял участие. Занимался решением конкретных тасков,
        за обговоренную плату. Сам проект представляет из себя web-приложение, для просмотра
        и редактирования файлов в репозитории юзера на GitHub. Проект построен на React + TS
        + Webpack и Pcss и уйме обвязки к этому стэку. В нем я работал над стилями, а так же
        написал логику commit changes через API GitHub, при сохранении изменений файла.
      </div>,
      used: 'React; TypeScript; Webpack; Pcss',
      links: [],
    }
  },
  {
    key: 5,
    cover: WayCover,
    isCommercial: false,
    size: 150,
    cardData: {
      images: [WayCover],
      dateFrom: '',
      dateTo: '',
      title: 'Way',
      text: <div>
        Самописный алгоритм нахождения пути от одной точки до другой,
        обходя препятствия, написан на canvas. Без серверной части.
      </div>,
      used: 'jQuery; Canvas',
      links: [],
    }
  },
  {
    key: 6,
    cover: ClickerCover,
    isCommercial: false,
    size: 190,
    cardData: {
      images: [ClickerCover],
      dateFrom: '',
      dateTo: '',
      title: 'Clicker',
      text: <div>
        Веб-игра кликер, с системой регистрации (при помощи проверки почты),
        входа и, соответственно, сохранением игровых данных на сервере в
        базе данных. Прикрутил чат, построенный на защищенных вебсокетах
        (wss), подвязывал при помощи workerman. Использовал composer для
        php. Проект закинул на полпути, т.к. он становился слишком громоздким.
        У него был потенциал, но я был слишком "зелен" для таких обьемов работы...
      </div>,
      used: '',
      links: [],
    }
  },

  {
    key: 7,
    cover: GameOfLifeCover,
    isCommercial: false,
    size: 200,
    cardData: {
      images: [GameOfLifeCover],
      dateFrom: '',
      dateTo: '',
      title: 'GameOfLifeCover',
      text: <div>
        Стандартная игра жизнь, базируется на canvas. Является одним из первых веб-приложений.
        Тогдя я начинал постигать js (и jQuery). Без серверной части.
      </div>,
      used: 'jQuery; Canvas',
      links: [],
    }
  },
  {
    key: 8,
    cover: PortfolioCover,
    isCommercial: false,
    size: 300,
    cardData: {
      images: [PortfolioCover],
      dateFrom: '',
      dateTo: '',
      title: 'PortfolioCover',
      text: <div>
        Сайт, на котором вы сейчас находитесь, второй по масштабам проект.
        Бэк на NodeJs, фронт на React + sass. Бэкенд каждые 10 минут
        спрашивает мой gitHub о новых коммитах, репозитроиях и т.д.
        Запоминает все это в БД (MYSQL). Так же ловит и хранит информацию,
        которую принимает с фронта. В добавок может отправлять письма через
        google smtp. Фронт же, работает только с API и ничего больше не трогает.
        Как вы уже могли заметить, он построен по принципу SPA.
      </div>,
      used: 'React; Sass; NodeJs; Nginx; MYSQL',
      links: [],
    }
  },
  {
    key: 9,
    cover: SepCashCover,
    isCommercial: false,
    size: 200,
    cardData: {
      images: [SepCashCover],
      dateFrom: '',
      dateTo: '',
      title: 'Sepcash',
      text: 'SepCash',
      used: '',
      links: [],
    }
  },
  {
    key: 10,
    cover: SeppassCover,
    isCommercial: false,
    size: 300,
    cardData: {
      images: [SeppassCover],
      dateFrom: '',
      dateTo: '',
      title: 'Seppass',
      text: <div>
        Телеграм бот предназначен для хранения паролей и других записей.
        Создал бота для себя просто потому что было интересно. Сейчас же
        приостановил этот проект, т.к. довел его до рабочего состояния, и
        дальше развивать его одному очень сложно. Каждому пользователю при
        регистрации создается уникальный gpg-ключ. Пароль хранится у юзера,
        а значит даже при утечке данных, расшифровать их не получится ни-ко-му.
        Так же бот умеет автоматически подвязываться к gitHub пользователя,
        и синхронизировать все данные из папки юзера с git-системой.
        Сверстал под него сайт, на который ведет эта ссылка.
      </div>,
      used: 'Python3; Telebot; Python-GnuPG; GitPython; SQLite',
      links: [],
    }
  },
]

const bubblesStyle = [
  // {margin: '0 310px 0 0'},
  // {margin: '90px 0 0 310px'},
  // {margin: '310px 150px 0 0'},
  // {margin: '397.5px 0 0 385px'},
  // {margin: '570px 0 0 160px'},
  // {margin: '600px 0 0 505px'},
  // {margin: '621px 167px 0 0'},
  // {margin: '544px 522px 0 0'},
  // {margin: '730px 0 0 150px'},
  // {margin: '745px 388px 0 0'},
  // {margin: '952px 304px 0 0'},
]

const compressedBubblesStyle = [
  {margin: '0 0 -200px 500px'}, // pumpy
  {margin: '0 0 -80px 100px'}, //webstap
  {margin: '0 0 -200px 400px'}, // BoosterGamesCover
  {margin: '0 0 -300px 100px'}, // AdminPanelCover
  {margin: '0 0 40px 760px'}, // GitDocksCover
  {margin: '0 0 -50px 700px'}, // way
  {margin: '0 0 -100px 300px'}, // clicker
  {margin: '0 0 -150px 0'}, // GameOfLifeCover
  {margin: '0 0 -200px 450px'}, // PortfolioCover
  {margin: '0 0 20px 200px'}, // sepcash
  {margin: '0 0 -2000px 300px'}, // seppass
]

const mobileBubblesStyle = [
  {margin: '0 0 0 80px'},
  {margin: '0 0 0 0'},
  {margin: '0 0 -20px 80px'},
  {margin: '0 0 -170px 0'},
  {margin: '0 0 0 230px'},
  {margin: '0 0 -30px 150px'},
  {margin: '0 0 -80px 0'},
  {margin: '0 0 -10px 180px'},
  {margin: '0 0 -10px 0'},
  {margin: '0 0 -20px 180px'},
  {margin: '0 0 -1800px 0'},
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
  {key: 11, cover: false, isCommercial: true, size: 70, style: {margin: '300px 0 0 0'}},
  {key: 12, cover: false, isCommercial: true, size: 50, style: {margin: '420px 730px 0 0'}},
  {key: 13, cover: false, isCommercial: true, size: 30, style: {margin: '400px 0 0 790px'}},
  {key: 14, cover: false, isCommercial: false, size: 30, style: {margin: '820px 780px 0 0'}},
  {key: 15, cover: false, isCommercial: false, size: 50, style: {margin: '1130px 0 0 230px'}},
  {key: 16, cover: false, isCommercial: false, size: 70, style: {margin: '930px 0 0 700px'}},
]

export const compressedSmallBubbles = [
  {key: 11, cover: false, isCommercial: true, size: 60, style: {margin: '300px 0 0 0'}},
  {key: 12, cover: false, isCommercial: true, size: 40, style: {margin: '400px 650px 0 0'}},
  {key: 13, cover: false, isCommercial: true, size: 25, style: {margin: '380px 0 0 700px'}},
  {key: 14, cover: false, isCommercial: false, size: 25, style: {margin: '800px 750px 0 0'}},
  {key: 15, cover: false, isCommercial: false, size: 40, style: {margin: '1100px 0 0 200px'}},
  {key: 16, cover: false, isCommercial: false, size: 60, style: {margin: '900px 0 0 650px'}},
]

export const smallMobileBubbles =  [
  {key: 11, cover: false, isCommercial: true, size: 70, style: {margin: '80px 0 0 290px'}},
  {key: 12, cover: false, isCommercial: true, size: 50, style: {margin: '20px 0 0 20px'}},
  {key: 13, cover: false, isCommercial: true, size: 30, style: {margin: '150px 0 0 40px'}},
  {key: 14, cover: false, isCommercial: false, size: 30, style: {margin: '370px 0 0 290px'}},
  {key: 15, cover: false, isCommercial: false, size: 50, style: {margin: '150px 0 0 30px'}},
  {key: 16, cover: false, isCommercial: false, size: 70, style: {margin: '380px 0 0 60px'}},
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
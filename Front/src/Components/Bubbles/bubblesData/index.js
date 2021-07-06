import AdminPanelCover from "../../../Static/Img/Portfolio/AdminPanelCover.png";
import BoosterGamesCover from "../../../Static/Img/Portfolio/BoosterGamesCover.png";
import GitDocksCover from "../../../Static/Img/Portfolio/GitDocksCover.png";
import GameOfLifeCover from "../../../Static/Img/Portfolio/GameOfLifeCover.png";
import SeppassCover from "../../../Static/Img/Portfolio/SeppassCover.png";
import PortfolioCover from "../../../Static/Img/Portfolio/PortfolioCover.png";
import WayCover from "../../../Static/Img/Portfolio/WayCover.png";
import ClickerCover from "../../../Static/Img/Portfolio/ClickerCover.png";
import SepCashCover from "../../../Static/Img/Portfolio/SepCashCover.png";

import Pumpy from "./Projects/PumpyFarm";
import WebStap from "./Projects/WebStap";
import BoosterGames from "./Projects/BoosterGames";
import AdminPanel from "./Projects/AdminPanel";
import GitDocks from "./Projects/GitDocks";
import Way from "./Projects/Way";
import Clicker from "./Projects/Clicker";
import GameOfLife from "./Projects/GameOfLife";
import Portfolio from "./Projects/Portfolio";
import Sepcash from "./Projects/Sepcash";
import Seppass from "./Projects/Seppass";

const bubblesData = [
	Pumpy,
	WebStap,
	BoosterGames,
	AdminPanel,
	GitDocks,
	Way,
	Clicker,
	GameOfLife,
	Portfolio,
	Sepcash,
];

const bubblesStyle = [
	{ margin: "0 0 -200px 500px" }, // pumpy
	{ margin: "0 0 -80px 100px" }, //webstap
	{ margin: "0 0 -200px 400px" }, // BoosterGamesCover
	{ margin: "0 0 -300px 100px" }, // AdminPanelCover
	{ margin: "0 0 40px 760px" }, // GitDocksCover
	{ margin: "0 0 -50px 700px" }, // way
	{ margin: "0 0 -100px 300px" }, // clicker
	{ margin: "0 0 -150px 0" }, // GameOfLifeCover
	{ margin: "0 0 -200px 450px" }, // PortfolioCover
	{ margin: "0 0 20px 200px" }, // sepcash
	{ margin: "0 0 -2000px 300px" }, // seppass
];

const laptopBubblesStyle = [
	{ margin: "0 0 0 80px" },
	{ margin: "0 0 0 0" },
	{ margin: "0 0 -20px 80px" },
	{ margin: "0 0 -170px 0" },
	{ margin: "0 0 0 230px" },
	{ margin: "0 0 -30px 150px" },
	{ margin: "0 0 -80px 0" },
	{ margin: "0 0 -10px 180px" },
	{ margin: "0 0 -10px 0" },
	{ margin: "0 0 -20px 180px" },
	{ margin: "0 0 -1800px 0" },
];

const mobileBubblesStyle = [
	{ margin: "0 0 10px 40px", width: 230, height: 230 },
	{ margin: "0 0 10px 0", width: 230, height: 230 },
	{ margin: "0 0 0 40px", width: 230, height: 230 },
	{ margin: "0 0 -140px 0", width: 150, height: 150 },
	{ margin: "0 0 10px 160px", width: 120, height: 120 },
	{ margin: "0 0 -70px 150px", width: 120, height: 120 },
	{ margin: "0 0 -30px 0", width: 150, height: 150 },
	{ margin: "0 0 0 120px", width: 150, height: 150 },
	{ margin: "0 0 10px 0", width: 230, height: 230 },
	{ margin: "0 0 10px 40px", width: 230, height: 230 },
	{ margin: "0 0 -1800px 0", width: 230, height: 230 },
];

export const bubbles = bubblesData.map((e) => {
	let newE = { ...e };
	newE.style = bubblesStyle[newE.key];
	return newE;
});

export const laptopBubbles = bubblesData.map((e) => {
	let newE = { ...e };
	newE.style = laptopBubblesStyle[newE.key];
	return newE;
});

export const mobileBubbles = bubblesData.map((e) => {
	let newE = { ...e };
	newE.style = mobileBubblesStyle[newE.key];
	return newE;
});

export const smallBubbles = [
	{
		key: 11,
		cover: false,
		isCommercial: true,
		size: 70,
		style: { margin: "610px 0 0 200px" },
	},
	{
		key: 12,
		cover: false,
		isCommercial: true,
		size: 50,
		style: { margin: "300px 0 0 50px" },
	},
	{
		key: 13,
		cover: false,
		isCommercial: true,
		size: 30,
		style: { margin: "100px 0 0 900px" },
	},
	{
		key: 14,
		cover: false,
		isCommercial: false,
		size: 30,
		style: { margin: "300px 0 0 800px" },
	},
	{
		key: 15,
		cover: false,
		isCommercial: false,
		size: 50,
		style: { margin: "200px 0 0 750px" },
	},
	{
		key: 16,
		cover: false,
		isCommercial: false,
		size: 70,
		style: { margin: "100px 0 0 100px" },
	},
];

export const smallLaptopBubbles = [
	{
		key: 11,
		cover: false,
		isCommercial: true,
		size: 70,
		style: { margin: "80px 0 0 290px" },
	},
	{
		key: 12,
		cover: false,
		isCommercial: true,
		size: 50,
		style: { margin: "20px 0 0 20px" },
	},
	{
		key: 13,
		cover: false,
		isCommercial: true,
		size: 30,
		style: { margin: "150px 0 0 40px" },
	},
	{
		key: 14,
		cover: false,
		isCommercial: false,
		size: 30,
		style: { margin: "370px 0 0 290px" },
	},
	{
		key: 15,
		cover: false,
		isCommercial: false,
		size: 50,
		style: { margin: "150px 0 0 30px" },
	},
	{
		key: 16,
		cover: false,
		isCommercial: false,
		size: 70,
		style: { margin: "380px 0 0 60px" },
	},
];

export const smallMobileBubbles = [
	{
		key: 11,
		cover: false,
		isCommercial: true,
		size: 70,
		style: { margin: "130px 0 0 220px" },
	},
	{
		key: 12,
		cover: false,
		isCommercial: true,
		size: 50,
		style: { margin: "200px 0 0 10px" },
	},
	{
		key: 13,
		cover: false,
		isCommercial: true,
		size: 30,
		style: { margin: "130px 0 0 20px" },
	},
	{
		key: 14,
		cover: false,
		isCommercial: false,
		size: 30,
		style: { margin: "490px 0 0 230px" },
	},
	{
		key: 15,
		cover: false,
		isCommercial: false,
		size: 50,
		style: { margin: "200px 0 0 10px" },
	},
	{
		key: 16,
		cover: false,
		isCommercial: false,
		size: 60,
		style: { margin: "180px 0 0 220px" },
	},
];

export const bubblesLegend = [
	{
		key: 0,
		cover: false,
		isCommercial: true,
		size: 24,
		style: { margin: "0px 0 0 105px", transform: "rotate(-45deg)" },
	},
	{
		key: 1,
		cover: false,
		isCommercial: true,
		size: 35,
		style: { margin: "-10px 0 0 30px", transform: "rotate(-45deg)" },
	},
	{
		key: 2,
		cover: false,
		isCommercial: false,
		size: 28,
		style: { margin: "0 0 0 120px", transform: "rotate(45deg)" },
	},
	{
		key: 3,
		cover: false,
		isCommercial: false,
		size: 30,
		style: { margin: "-15px 0 0 14px", transform: "rotate(45deg)" },
	},
];

export const mobileBubblesLegend = [
	{
		key: 0,
		cover: false,
		isCommercial: true,
		size: 24,
		style: { margin: "0px 0 0 105px", transform: "rotate(45deg)" },
	},
	{
		key: 1,
		cover: false,
		isCommercial: true,
		size: 35,
		style: { margin: "-10px 0 0 30px", transform: "rotate(45deg)" },
	},
	{
		key: 2,
		cover: false,
		isCommercial: false,
		size: 28,
		style: { margin: "0 0 0 120px", transform: "rotate(-45deg)" },
	},
	{
		key: 3,
		cover: false,
		isCommercial: false,
		size: 30,
		style: { margin: "-15px 0 0 14px", transform: "rotate(-45deg)" },
	},
];

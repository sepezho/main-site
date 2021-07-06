import React from "react";

import { Provider } from "react-redux";
import { store } from "./Store/Store";

import { GetInstData } from "./Logics/GetInstData";
import { GetGitData } from "./Logics/GetGitData";
import { GetLikesData } from "./Logics/GetLikesData";
import { GetViewsData } from "./Logics/GetViewsData";

import Header from "./Components/Header/";
import Info from "./Components/Info/";
import Bubbles from "./Components/Bubbles/";
import Tables from "./Components/Tables/";
import Footer from "./Components/Footer/";

import "./Style/App.sass";

// work with my api and yandex api
store.dispatch(GetInstData());
store.dispatch(GetGitData());
store.dispatch(GetLikesData());
store.dispatch(GetViewsData());

const App = () => {
	// need to delete
	// useEffect(()=>alert('Работа над сайтом еще ведется. Тексты с инфой частично не актуальны. Если найдешь неочевидные баги -> пиши в тг (@sepezho)'), [])
	return (
		<Provider store={store}>
			<Header />
			<Info />
			<Bubbles />
			<Tables />
			<Footer />
		</Provider>
	);
};

export default App;

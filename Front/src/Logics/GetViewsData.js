import { UpdateViews } from "../Store/Actions/UpdateViewsAction";

export const GetViewsData = () => {
	return (dispatch) => {
		fetch(
			"https://api-metrika.yandex.net/analytics/v3/data/ga?end-date=today&ids=ga%3A74727217&metrics=ga%3Apageviews&start-date=2021-03-25",
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((response) =>
				dispatch(UpdateViews(response.totalsForAllResults["ga:pageviews"]))
			)
			.catch((err) => console.log(err));
	};
};

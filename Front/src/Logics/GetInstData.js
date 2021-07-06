import { UpdateInstData } from "../Store/Actions/UpdateInstDataAction";

export const GetInstData = () => {
	return (dispatch) => {
		fetch("https://sepezho.com:8888/API/GetInstData", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((response) => dispatch(UpdateInstData(response)))
			.catch((err) => console.log(err));
	};
};

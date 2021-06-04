import { UpdateGitData } from '../Store/Actions/UpdateGitDataAction';

export const GetGitData = () => {
  return dispatch => {
    fetch("https://sepezho.com:7777/API/RepComViews", {
      method: "POST",
      headers: {"Content-Type": "application/json;charset=UTF-8"}
    })
      .then((response) => response.json())
      .then((response) => dispatch(UpdateGitData(response)))
      .catch((err) => console.log(err))
  }
}
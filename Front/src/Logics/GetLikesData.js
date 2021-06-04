import { UpdateLikesData } from '../Store/Actions/UpdateLikesDataAction';

export const GetLikesData = () => {
  return dispatch => {
    fetch("https://sepezho.com:7777/API/ChatLikes", {
      method: "POST"
    })
      .then(response => response.json())
      .then(response => dispatch(UpdateLikesData(response)))
      .catch(error => console.log(error))
  }
}
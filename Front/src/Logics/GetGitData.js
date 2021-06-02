import { connect } from 'react-redux';
import { UpdateGitData } from '../Store/Actions/UpdateGitDataAction';

const GetGitData = (props) => {


  fetch("https://sepezho.com:7777/API/RepComViews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
    props.UpdateGitData(data)
  })
  .catch(error => {
    console.log(error);
  });


  // fetch('https://sepezho.com:8888/API/GetGitData', {
  //   method: 'GET'
  // })
  // .then((response) => response.json())
  // .then((response) => {
  //   props.UpdateGitData(response)
  // })
  // .catch((err) => {
  //   console.log(err);
  //   // alert("Не могу получить данные с Gitagram :)");
  // });
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateGitData: (gitData) => dispatch(UpdateGitData(gitData)),
  };
};

export default connect(null, mapDispatchToProps)(GetGitData);
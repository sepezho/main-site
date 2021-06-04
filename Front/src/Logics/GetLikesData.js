import { connect } from 'react-redux';
import { UpdateLikesData } from '../Store/Actions/UpdateLikesDataAction';

const GetGitData = (props) => {
  fetch("https://sepezho.com:7777/API/ChatLikes", {
    method: "POST"
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
    props.UpdateLikesData(data)
  })
  .catch(error => {
    console.log(error);
  });

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateLikesData: (gitData) => dispatch(UpdateLikesData(gitData)),
  };
};

export default connect(null, mapDispatchToProps)(GetGitData);
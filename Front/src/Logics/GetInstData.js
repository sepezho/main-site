import { connect } from 'react-redux';
import { UpdateInstData } from '../Store/Actions/UpdateInstDataAction';

const GetInstDataFunc = (props) => {
  fetch('https://sepezho.com:8888/API/GetInstData', {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((response) => {
    props.UpdateInstData(response)
  })
  .catch((err) => {
    console.log(err);
    // alert("Не могу получить данные с Instagram :)");
  });
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateInstData: (instData) => dispatch(UpdateInstData(instData)),
  };
};

export default connect(null, mapDispatchToProps)(GetInstDataFunc);
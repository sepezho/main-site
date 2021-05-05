import React from 'react';
import { connect } from 'react-redux';
import { UpdateViews } from 'src/Store/Actions/UpdateViewsAction';

const UpdateViewsFunc: React.FC = (props) => {
  fetch('https://api-metrika.yandex.net/analytics/v3/data/ga?end-date=today&ids=ga%3A74727217&metrics=ga%3Apageviews&start-date=2021-03-25', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      props.UpdateViews(response.totalsForAllResults['ga:pageviews']);
    })
    .catch((err) => {
      console.log(err);
      alert("Не могу получить данные о просмотрах сайта с Yandex :)");
    });
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateViews: (views) => dispatch(UpdateViews(views)),
  };
};
export default connect(null, mapDispatchToProps)(UpdateViewsFunc);
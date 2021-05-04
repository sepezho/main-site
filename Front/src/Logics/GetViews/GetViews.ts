import React from 'react';
import { connect } from 'react-redux';
import { UpdateViews } from 'src/Store/Actions/UpdateViewsAction';

const UpdateViewsFunc: React.FC = (props) => {

//   const url = () => {
//     let userName = 'sepezho'
//     return (
//       "https://images" +
//       ~~(Math.random() * 3333) +
//       "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" +
//       userName +
//       "/"
//     );
//   };

//   const getJSON = (body) => {
//     try {
//       const data = body
//         .split("window._sharedData = ")[1]
//         .split("</script>")[0];
//       return JSON.parse(data.substr(0, data.length - 1));
//     } catch (err) {
//       throw Error("cannot parse response body");
//     }
//   };

//   const fetchWithRetry = (n, err) => {
//     if (n <= 1) throw err;

//     return fetch(url())
//       .then((resp) => resp.text())
//       .then((body) => getJSON(body))
//       .then((json) => {
//         //filter videos
//         json.entry_data.ProfilePage[0].graphql.user
//         .edge_owner_to_timeline_media.edges = json.entry_data.ProfilePage[0].graphql.user
//         .edge_owner_to_timeline_media.edges.filter(e => !e.node.is_video)

//         props.UpdateViews(json.entry_data.ProfilePage[0])
//       })
//       .catch((err) => fetchWithRetry(n - 1, err));
//   };
  
//   fetchWithRetry(5)

//   return null;
// };


const mapDispatchToProps = (dispatch) => {
  return {
    UpdateViews: (views) => dispatch(UpdateViews(views)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateViewsFunc);


// https://api-metrika.yandex.net/analytics/v3/data/ga?end-date=today&ids=ga%3A74727217&metrics=ga%3Apageviews&start-date=2021-03-25
import React from 'react';
import { connect } from 'react-redux';
import { UpdateImgs } from 'src/Store/Actions/UpdateImgsAction';

const UpdateImgsFunc: React.FC = (props) => {

  const url = () => {
    let userName = 'sepezho'
    return (
      "https://images" +
      ~~(Math.random() * 3333) +
      "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" +
      userName +
      "/"
    );
  };

  const getJSON = (body) => {
    try {
      const data = body
        .split("window._sharedData = ")[1]
        .split("</script>")[0];
      return JSON.parse(data.substr(0, data.length - 1));
    } catch (err) {
      throw Error("cannot parse response body");
    }
  };

  const fetchWithRetry = (n, err) => {
    if (n <= 1) throw err;

    return fetch(url())
      .then((resp) => resp.text())
      .then((body) => getJSON(body))
      .then((json) => {
        //filter videos
        json.entry_data.ProfilePage[0].graphql.user
        .edge_owner_to_timeline_media.edges = json.entry_data.ProfilePage[0].graphql.user
        .edge_owner_to_timeline_media.edges.filter(e => !e.node.is_video)

        props.UpdateImgs(json.entry_data.ProfilePage[0])
      })
      .catch((err) => fetchWithRetry(n - 1, err));
  };
  
  fetchWithRetry(5)

  return null;
};


const mapDispatchToProps = (dispatch) => {
  return {
    UpdateImgs: (imgs) => dispatch(UpdateImgs(imgs)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateImgsFunc);

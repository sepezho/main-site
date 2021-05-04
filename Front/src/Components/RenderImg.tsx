import React from 'react';
import Img from "react-cool-img";

const RenderImg: React.FC = ({url}) => {
  return <Img src={'http://46.101.118.222:5555/'+url} crossOrigin="anonymous" lazy={false} />
}

export default RenderImg
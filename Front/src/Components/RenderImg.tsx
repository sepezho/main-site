import React from 'react';
import Img from "react-cool-img";

const RenderImg: React.FC = ({url}) => {
  return <Img src={'https://sepezho.com:5555/'+url} crossOrigin="anonymous" lazy={false} />
}

export default RenderImg
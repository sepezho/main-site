import Img from "react-cool-img";

const RenderImg = props => {
  let img = null
  img = <img
          src={'https://sepezho.com:5555/'+props.url}
          crossOrigin="anonymous"
          onError={()=>{
            img = <Img
                    src={'https://sepezho.com:5555/'+props.url}
                    crossOrigin="anonymous"
                    lazy={false}
                  />
          }}
        />
  return img
}

export default RenderImg
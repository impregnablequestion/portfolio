import ReactPlayer from "react-player/vimeo";

const BellJarRota = () => {

    const video = "https://vimeo.com/800257110"

    return(
        <div>
            <ReactPlayer url={video} controls/>
        </div>
    )
}

export default BellJarRota;
import ReactPlayer from "react-player/vimeo";

const Video = (video) => {

    return (
        <div>
            <ReactPlayer url={video} controls/>
        </div>
    )
}

export default Video;
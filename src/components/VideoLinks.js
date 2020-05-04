import React from "react"

import VideoLink from "./VideoLink"

const VideoLinks = ({ videoList, handleClick }) => {

    const listOfvVideos = videoList.map((videolink, index) => <VideoLink videolink={videolink} handleClick={handleClick} key={index} />
    )



    return (
        <div className="VideoLinks">
            {listOfvVideos}
        </div>
    )


}


export default VideoLinks
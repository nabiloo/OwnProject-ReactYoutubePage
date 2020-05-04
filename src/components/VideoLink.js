import React from "react"

const VideoLink = ({ videolink, handleClick }) => {


    return (
        <div className="VideoLink" onClick={() => handleClick(videolink)}>
            <img src={videolink.snippet.thumbnails.medium.url} alt="thumbnail" />
            <h1>{videolink.snippet.title}</h1>
        </div>
    )
}


export default VideoLink




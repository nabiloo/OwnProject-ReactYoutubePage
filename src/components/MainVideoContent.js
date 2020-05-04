
import React from "react"

const MainVideoContent = ({ selectedVideo }) => {

    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    const videoURL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

    return (
        <div className="MainVideoContent">
            <iframe src={videoURL}></iframe>
            <h1>{selectedVideo.snippet.title}  </h1>
            <p>{selectedVideo.snippet.channelTitle} - {selectedVideo.snippet.publishedAt.slice(0, 10)}</p>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    )
}


export default MainVideoContent
import React from 'react';
import './App.css';
import YoutubeAPi from "./YoutubeAPi"
import MainVideoContent from "./components/MainVideoContent"
import VideoSearch from "./components/VideoSearch"
import VideoLinks from "./components/VideoLinks"

const YOUTUBE_API_KEY = "please here your api key"


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      searchedFor: "",
      videoList: [],
      selectedVideo: null
    }
  }


  componentDidMount() {
    this.requestToApi("london city")
  }

  setSearchInState = (event) => { this.setState({ searchedFor: event.target.value }) }

  requestToApi = async (query) => {
    const response = await YoutubeAPi.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: YOUTUBE_API_KEY,
        q: query,
      }
    })

    this.setState({ videoList: response.data.items, selectedVideo: response.data.items[0] })
  }


  handleClick = (videoSelected) => {
    this.setState({ selectedVideo: videoSelected })
  }

  render() {



    return (
      <div className="App" >

        <VideoSearch
          setSearchInState={this.setSearchInState}
          getSearch={this.state.searchedFor}
          requestToApi={this.requestToApi}
        />

        <div className="content">

          <MainVideoContent
            selectedVideo={this.state.selectedVideo} />

          <VideoLinks
            videoList={this.state.videoList}
            handleClick={this.handleClick}
          />

        </div>

      </div>
    );

  }


}

export default App;

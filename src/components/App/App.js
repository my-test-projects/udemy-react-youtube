import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './../Video/SearchBar';
import VideoList from './../Video/VideoList';
import VideoDetails from './../Video/VideoDetails';
import YTSearch from 'youtube-api-search';
import './App.css';


const apiKey = "AIzaSyBa-BgYH7KYbQ140BzuHlXByYzX9L0GbJ0";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onVideoSearch('');
    }

    render() {
        const videoSearch = _.debounce(term => {this.onVideoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onVideoSearch={videoSearch} />
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect} />
            </div>
        );
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    onVideoSearch = (term) => {

        YTSearch({key: apiKey, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
}

export default App;

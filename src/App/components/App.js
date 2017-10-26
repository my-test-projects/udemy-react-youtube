import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from '../../Video/components/SearchBar';
import VideoList from '../../Video/containers/VideoListContainer';
import VideoDetails from '../../Video/containers/VideoDetailsContainer';
import YTSearch from 'youtube-api-search';
import './App.css';


const apiKey = "AIzaSyBa-BgYH7KYbQ140BzuHlXByYzX9L0GbJ0";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        this.onVideoSearch('');
    }

    render() {
        const videoSearch = _.debounce(term => {this.onVideoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onVideoSearch={videoSearch} />
                <VideoDetails />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

    onVideoSearch = (term) => {

        YTSearch({key: apiKey, term: term}, (videos) => {
            this.setState({
                videos: videos
            })
        });
    }
}

export default App;

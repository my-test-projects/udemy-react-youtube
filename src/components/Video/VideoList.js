import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

    render() {
        const { videos, onVideoSelect } = this.props;

        if(!videos) {
            return <div>Loading ...</div>;
        }

        const videoList = videos.map(video => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={onVideoSelect} />
            );
        });

        return (
            <ul className="col-md-4 list-group">
                {videoList}
            </ul>
        )
    }
}

VideoList.propTypes = {
    videos: PropTypes.array,
    onVideoSelect: PropTypes.func.isRequired
};

export default VideoList;

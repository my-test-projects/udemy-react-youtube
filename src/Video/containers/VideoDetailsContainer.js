import React, { Component } from 'react';
import VideoDetails from './../components/VideoDetails';
import { connect } from 'react-redux';


class VideoDetailsContainer extends Component {

    render () {
        const { video } = this.props;

        if (!video) {
            return <div></div>;
        }

        return (
            <VideoDetails video={video} />
        );
    }
}

function mapStateToProps(state) {
    return {
        video: state.selectedVideo
    }
}

export default connect(mapStateToProps)(VideoDetailsContainer);

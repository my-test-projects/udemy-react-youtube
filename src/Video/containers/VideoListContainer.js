import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import VideoList from './../components/VideoList';
import { selectVideo } from './../actions/videoDetailsAction';

class VideoListContainer extends Component {

    render() {
        const { videos, actions } = this.props;

        if(!videos) {
            return <div>Loading ...</div>;
        }

        return (
            <VideoList videos={videos} onVideoSelect={actions.selectVideo} />
        )
    }
}

VideoListContainer.propTypes = {
    videos: PropTypes.array
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({
            selectVideo
        }, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(VideoListContainer);

import { SELECT_VIDEO } from './../consts/actionTypes';

export const selectVideo = (video) => {
    return {
        type: SELECT_VIDEO,
        payload: video
    }
};
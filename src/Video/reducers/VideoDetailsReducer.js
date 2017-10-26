import { SELECT_VIDEO } from './../consts/actionTypes';

export default function videoDetailReducer(state = null, action) {
    switch (action.type) {
        case SELECT_VIDEO: {
            console.log("action: " + JSON.stringify(action));
            return action.payload;
        }
        default: return state;
    }
}
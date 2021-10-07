import { SET_SONG } from '../constants';

const initialState = {
    songs: []
};

export const songReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SONG:
            return {
                ...state,
                song: action.payload
            }
        default:
            return state;
    }
};

export const setSong = payload => ({
    type: SET_SONG,
    payload
});
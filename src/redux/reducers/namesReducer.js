import { SET_NAMES } from '../constants';

const initialState = {
    names: []
};

export const namesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAMES:
            return {
                ...state,
                names: action.payload
            }
        default:
            return state;
    }
};

export const setNames = payload => ({
    type: SET_NAMES,
    payload
});
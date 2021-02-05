import {
    LOGIN,
} from '../actions/types';

const initialState = {
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};
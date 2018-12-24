import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    authChecking: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_CHECK:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default reducer;
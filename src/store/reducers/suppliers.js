import * as actionTypes from '../actions/actionTypes';

const initialState = {data:[],amount:0};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_SUPPLIERS:
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    amount: 0,
    count: 0
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case actionTypes.GET_BRIDEGROOM:
            return {
                ...state,
                ...action.bride
            };
        case actionTypes.DELETE_BRIDE:
            const id = action.id;
            let removedIndex = -1;
            state.data.forEach( ( el, ind ) => {
                if ( el._id === id ) {
                    removedIndex = ind
                }
            } );
            if ( removedIndex > -1 ) {
                state.data.splice( removedIndex, 1 );
                state.amount--;
            }
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reducer;
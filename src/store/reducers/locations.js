import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_LOCATIONS:
            return [
                ...action.locations
            ];
        case actionTypes.ADD_LOCATIONS:
            return [
                ...state,
                action.location
            ];
        case actionTypes.EDIT_LOCATIONS:
            let  editedindex = -1;
            state.map( (el,index) =>{
                if( el._id === action.location._id ){
                    editedindex = index;
                    return;
                }
            });
            if( editedindex>-1){
                state[editedindex] = {...action.location}
            }
            return [...state];
        case actionTypes.REMOVE_LOCATIONS:
            let  removedIndex = -1;
            state.map( (el,index) =>{
                if( el._id === action.payload.location ){
                    removedIndex = index;
                    return;
                }
            });
            if( removedIndex>-1){
                state.splice(removedIndex,1)
            }

            return [...state];
        default:
            return state;
    }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INIT_SUPPLIERS_TYPE:
            return [
                ...action.types
            ];
        case actionTypes.ADD_SUPPLIERS_TYPE:
            return [
                ...state,
                action.types
            ];
        case actionTypes.EDIT_SUPPLIERS_TYPE:
            let  editedindex = -1;
            state.map( (el,index) =>{
                if( el._id === action.types._id ){
                    editedindex = index;
                    return;

                }
            });
            if( editedindex>-1){
                state[editedindex] = {...action.types}
            }
            return [...state];

        case actionTypes.DELETE_SUPPLIERS_TYPE:
            let  removedIndex = -1;
            state.map( (el,index) =>{
                if( el._id === action.types._id ){
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
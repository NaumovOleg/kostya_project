import * as actionTypes from './actionTypes';
import {request} from '../actions/axios'


export const initBrideGroom = (bride) => {
    return {
        type: actionTypes.GET_BRIDEGROOM,
        bride
    };
};

export const removeSupplier =( id )=>{
    return {
        type: actionTypes.DELETE_BRIDE,
        id
    };
};

export const getBrideGroom = (params) => dispatch => {
    return request.get(
        `/cms/users/bridegroom`,
        {params}
    ).then(res => {
        const response = res.data;
        if (response.success) {
            const bride = response.data.users;
            dispatch(initBrideGroom({ count:res.data.data.queryResultCount , data: bride, amount: response.data.amount}));
        }

    }).catch(error => {

    });
};
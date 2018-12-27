import * as actionTypes from './actionTypes';
import {request} from '../actions/axios'

export const initSuppliers = (data) => {
    return {
        type: actionTypes.GET_SUPPLIERS,
        data
    };
};

export const removeSupplier =( id )=>{
    return {
        type: actionTypes.DELETE_SUPPLIER,
        id
    };
};

export const removeBride =( id )=>{
    return {
        type: actionTypes.DELETE_BRIDE,
        id
    };
};

export const getSuppliers = (params) => dispatch => {
    return request.get(
       `/cms/users/supplier`,
        {params}
    ).then(res => {
        const response = res.data;
        if (response.success) {
            const suppliers = response.data.users;
            dispatch(initSuppliers({data: suppliers,count:res.data.data.queryResultCount, amount: response.data.amount}));
        }

    }).catch(error => {
    });
};


export const putSuppliersType = (data) => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'put',
        data,
    }).then(res => {
        const response = res.data;


    }).catch(error => {
    });
};

export const deleteUser = ( data , type ) => dispatch => {
    const params = {
        _id: data
    };
    switch (type) {
        case 'supplier':{
            dispatch(removeSupplier( data ));
            break
        }
        case 'bride' :{
            dispatch(removeBride( data ));
        }
        default : break;

    }

    return request({
        url: `/cms/users`,
        method:"Delete",
        data:{_id: params._id}
    }).then(res => {
        if( res.data.success ){
            switch (type) {
                case 'supplier':{
                    dispatch(removeSupplier( data ));
                    break
                }
                case 'bride' :{
                    dispatch(removeBride( data ));
                }
                default : break;

            }
        }
        const response = res.data;
    }).catch(error => {
    });
};



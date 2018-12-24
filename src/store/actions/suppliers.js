
import * as actionTypes from './actionTypes';
import {request} from '../actions/axios'

export const initSuppliers = ( data ) => {
    return {
        type: actionTypes.GET_SUPPLIERS,
        data
    };
};

export const getSuppliers = () => dispatch => {
    return request({
        url: `/cms/users/supplier`,
        method: 'get',
    }).then ( res => {
        const response  = res.data;
        if( response.success ){
            const suppliers =  response.data.users ;
            dispatch(initSuppliers( {data:suppliers,amount:response.data.amount} ));
        }

    } ).catch ( error => {} );
};

export const deleteSuppliersType = ( data ) => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'delete',
        data,
    }).then ( res => {
        const response  = res.data;


    } ).catch ( error => {} );
};

export const putSuppliersType = ( data ) => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'put',
        data,
    }).then ( res => {
        const response  = res.data;


    } ).catch ( error => {} );
};


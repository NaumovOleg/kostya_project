import * as actionTypes from './actionTypes';
import {request} from '../actions/axios'


export const initTypes = (types) => {
    return {
        type: actionTypes.INIT_SUPPLIERS_TYPE,
        types
    };
};


export const editTypes = (types) => {
    return {
        type: actionTypes.EDIT_SUPPLIERS_TYPE,
        types
    };
};


export const addTypes = (types) => {
    return {
        type: actionTypes.ADD_SUPPLIERS_TYPE,
        types
    };
};

export const deleteTypes = (types) => {
    return {
        type: actionTypes.DELETE_SUPPLIERS_TYPE,
        types
    };
};

export const getSuppliersTypes = () => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'GET',
    }).then(res => {
        if (res.data.success) {
            const types = res.data.data;
            dispatch(initTypes(types))
        }
    }).catch(error => {});
};
export const addSuppliersTypes = (data) => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'POST',
        data
    }).then(res => {
        if (res.data.success) {
            const types = res.data.data;
            dispatch(addTypes(types))
        }
    }).catch(error => {});
};

export const removeSuppliersTypes = (data) => dispatch => {
    return request({
        url: `/cms/supplier/types`,
        method: 'DELETE',
        data
    }).then(res => {
        if (res.data.success) {
            const types = res.data.data;
            if (res.data.success) {
                dispatch(deleteTypes(data))
            }

        }
    }).catch(error => {});
};

export const editSuppliersTypes = (data) => dispatch => {
    return request.put(
        `/cms/supplier/types`,
        data
    ).then(res => {
        if (res.data.success) {
            const types = res.data.data;
            if (res.data.success) {
                dispatch(editTypes(data))
            }

        }
    }).catch(error => {});
};




import * as actionTypes from './actionTypes';
import {request } from './axios'

export const authStart = ( data ) => {
    console.log( data );
    return {
        type: actionTypes.AUTH_CHECK,
        data
    };
};

export const login = (data) => dispatch => {
    return request({
        url: `/cms/signin`,
        method: 'post',
        data
    }).then ( res => {
        const response  = res.data;
        if( response.success === true  ){
            const token = response.data.tokens[0].token;
            dispatch(authStart({
                isAuthenticated: true,
                authChecking: false
            }))
            return {success:true,token:token }  ;
        } else {
            throw new Error('Authentification failed ')
        }


    } ).catch ( error => {
        return error
    } );
};


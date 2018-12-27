import * as actionTypes from './actionTypes';
import { request, setAuthToken } from './axios'

export const authStart = ( data ) => {
    return {
        type: actionTypes.AUTH_CHECK,
        data
    };
};

export const login = ( data ) => dispatch => {
    return request( {
        url: `/cms/signin`,
        method: 'post',
        data
    } ).then( res => {
        const response = res.data;
        if ( response.success === true ) {
            const token = response.data.tokens[ 0 ].token;
            setAuthToken( token );
            dispatch( authStart( {
                isAuthenticated: true,
                authChecking: false
            } ) );
            return { success: true, token: token };
        } else {
            throw new Error( 'Authentification failed ' )
        }
    } ).catch( error => {
        return error
    } );
};

export const logOut = () => dispatch => {
    return request( {
        url: `/cms/logout`,
        method: 'delete',
    } ).then( res => {
        dispatch( authStart( {
            isAuthenticated: false,
            authChecking: false
        } ) );
        return {
            result: 'signed out'
        }
    } ).catch( error => {
        return {
            error: true,
        }
    } );
};

export const checkAuth = ( data, cb ) => dispatch => {
    return request( {
        url: `/cms/token/authentication`,
        method: 'get',
        headers: {
            'x-auth': data,
        }
    } ).then( res => {
        if ( res.data.success ) {
            cb( true )
        } else {
            cb( false )
        }
    } ).catch( error => {
        cb( false )
    } );
};



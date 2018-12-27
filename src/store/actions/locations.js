import * as actionTypes from './actionTypes';
import { request } from '../actions/axios'

export const initLocations = ( locations ) => {
    return {
        type: actionTypes.GET_LOCATIONS,
        locations
    };
};


export const editLocations = ( location ) => {
    return {
        type: actionTypes.EDIT_LOCATIONS,
        location
    };
};


export const addLocations = ( location ) => {
    return {
        type: actionTypes.ADD_LOCATIONS,
        location
    };
};

export const getLocations = () => dispatch => {
    return request( {
        url: `/cms/supplier/locations`,
        method: 'get',
    } ).then( res => {
        if ( res.data.success ) {
            const locations = res.data.data;
            console.log( locations );
            dispatch( initLocations( locations ) )
        }
    } ).catch( error => {
    } );
};

export const addNewLocations = ( data ) => dispatch => {
    const postData = {
        title: data.title,
        lng: Number( data.location.lng ),
        lat: Number( data.location.lat )
    };
    return request.post(
        `/cms/supplier/locations`,
        postData
    ).then( res => {
        if ( res.data.success ) {
            dispatch( addLocations( res.data.data ) )
        }

    } ).catch( error => {

    } );
};


export const editLocation = ( data ) => dispatch => {
    const postData = {
        title: data.title,
        lng: Number( data.location.lng ),
        lat: Number( data.location.lat ),
        _id: data._id
    };
    return request.put(
        `/cms/supplier/locations`,
        postData
    ).then( res => {
        if ( res.data.success ) {
            dispatch( editLocations( res.data.data ) )
        }

    } ).catch( error => {

    } );
};


export const romoveLocation = ( data ) => dispatch => {
    return request( {
            url: `/cms/supplier/locations`,
            method: 'DELETE',
            data
        }
    ).then( res => {
        if ( res.data.success ) {
            dispatch( {
                type: actionTypes.REMOVE_LOCATIONS,
                payload: { location: data._id }
            } )
        }
    } ).catch( error => {
    } );
};
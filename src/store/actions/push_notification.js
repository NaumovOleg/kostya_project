import {request} from "./axios";

export const pushNotification = ( data ) => dispatch => {
    console.log( data )
    return request({
        url: '/cms/notifications/send',
        method: 'post',
        data:data,
    }).then(response => {
        console.log( response )


    }).catch(error => {
    });
};
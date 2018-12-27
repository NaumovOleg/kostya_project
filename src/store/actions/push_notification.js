import {request} from "./axios";

export const pushNotification = ( data ) => dispatch => {
    return request({
        url: '/cms/notifications/send',
        method: 'post',
        data:data,
    }).then(response => {
    }).catch(error => {
    });
};
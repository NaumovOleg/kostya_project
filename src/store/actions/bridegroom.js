import * as actionTypes from './actionTypes';
import {request} from '../actions/axios'


export const initBrideGroom = (bride) => {
    return {
        type: actionTypes.GET_BRIDEGROOM,
        bride
    };
};

export const getBrideGroom = () => dispatch => {
    return request({
        url: `/cms/users/bridegroom`,
        method: 'get',
    }).then(res => {
        const response = res.data;
        if (response.success) {
            const bride = response.data.users;
            console.log({data: bride, amount: response.data.amount});
            dispatch(initBrideGroom({data:bride, amount:response.data.amount}));
        }

    }).catch(error => {

    });
};
import axios from 'axios';

axios.baseURL = '/';

const request = axios.create( {
    baseURL: '/',
    headers: {
        'Access-Control-Allow-Origin': 'https://serene-waters-78929.herokuapp.com',
        'Access-Control-Allow-Methods': '*',
        'Content-Type': 'application/json; charset=utf-8'
    }
} );

function setAuthToken( token ) {
    axios.defaults.headers.common[ 'x-auth' ] = token;
}

export { request, setAuthToken }
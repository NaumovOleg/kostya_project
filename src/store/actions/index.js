const {login, authStart, logOut} = require('./auth');
const {getSuppliers, initSuppliers, deleteSuppliersType, putSuppliersType} = require('./suppliers');
const {getBrideGroom,initBrideGroom} = require('./bridegroom');
const  { getLocations,addNewLocations,editLocation,initLocations }  = require ( './locations' );
export {


    login,
    authStart,
    logOut,

    getSuppliers,
    putSuppliersType,
    deleteSuppliersType,
    initSuppliers,


    getBrideGroom,
    initBrideGroom,


    getLocations,
    addNewLocations,
    editLocation,
    initLocations


};
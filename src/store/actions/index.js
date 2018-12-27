const {login, authStart, logOut,checkAuth} = require('./auth');
const {getSuppliers, initSuppliers, deleteUser, deleteSuppliersType, putSuppliersType} = require('./suppliers');
const {getBrideGroom,initBrideGroom} = require('./bridegroom');
const  { getLocations,addNewLocations,editLocation,initLocations,romoveLocation }  = require ( './locations' );
const {getSuppliersTypes,addSuppliersTypes,removeSuppliersTypes,editSuppliersTypes} = require('./suppliersType');
const {pushNotification}  = require('./push_notification')
export {


    login,
    authStart,
    logOut,
    checkAuth,

    getSuppliers,
    putSuppliersType,
    deleteSuppliersType,
    initSuppliers,
    deleteUser,


    getBrideGroom,
    initBrideGroom,

    getLocations,
    addNewLocations,
    editLocation,
    initLocations,
    romoveLocation,

    getSuppliersTypes,
    addSuppliersTypes,
    removeSuppliersTypes,
    editSuppliersTypes,

    pushNotification


};
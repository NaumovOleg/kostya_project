const helper = () =>{
    window.__proto__.isEmptyObject = function( object ) {
        for(var key in object) {
            if(object.hasOwnProperty(key))
                return false;
        }
        return true;
    };
};


export default helper ;


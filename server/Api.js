const path = require('path');



function setRoutes( app ) {

    app.get('/',function (req,res) {
        console.log( '-------------' )
        res.sendFile('index.html', { root: path.join(__dirname, '/../build') })
        // res.send( req.body )
    });



}

exports.setRoutes = setRoutes;
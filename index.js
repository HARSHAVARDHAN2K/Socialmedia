const express = require('express');
const app = express();
const port = 8000;

// setting up EJS Engine
app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${port}`);
    }

    console.log(`server running on port: ${port}`);
});
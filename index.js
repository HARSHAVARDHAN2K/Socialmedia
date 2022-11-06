const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${port}`);
    }

    console.log(`server running on port: ${port}`);
});
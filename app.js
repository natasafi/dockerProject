const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hoi thoire');
})

module.exports = {app};
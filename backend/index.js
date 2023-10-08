const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const backend = express();
const api = require('./api');

backend.use(bodyParser.json()); 

backend.use('/api', api);

backend.get('/',function(req, res){
    res.send('Hello')
})

backend.listen(port)

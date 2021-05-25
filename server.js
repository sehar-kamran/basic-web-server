const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/time', function(request, response){
    response.sendFile(path.join(__dirname, './public', 'time.html'));
});

app.get('*', function(request, response){
    response.sendFile(path.join(__dirname, './public', '404.html'));
});

app.listen(port, function(){
    console.log('Server is listening on port ' + port);
});
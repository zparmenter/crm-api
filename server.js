const express = require('express');

const app = express();


app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(4000, function() {
    console.log('Server is live on port 4000');
});

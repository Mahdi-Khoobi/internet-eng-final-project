const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Home.html'));
});

app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname, '/Signin.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);
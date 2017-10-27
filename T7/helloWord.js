const express = require('express');
const app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger) //Using middleware

app.get('/hello', function(req, res) {
     res.send("Hello World!")
     });
     
// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(3000, function() {
    console.log("Server up") //This prints in our server!
});
//Run this in one terminal and use curl localhost:3000/hello

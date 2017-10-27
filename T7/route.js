const express = require('express');
var bodyParser = require('body-Parser');
            const app = express();
	    
app.use(bodyParser)


// This route path will match abcd, abbcd, abbbcd, and so on.
            app.get('/ab+cd', function (req, res) {
                res.send('ab+cd')
            })

            // This route path will match /abe and /abcde.
            app.get('/ab(cd)?e', function (req, res) {
                res.send('ab(cd)?e')
            })

            // This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
            app.get('/ab*cd', function (req, res) {
                res.send('ab*cd')
            })
	    
	    app.post('/abc', function (req, res) {
                req.body.name
            })
	    
	    app.listen(3000);

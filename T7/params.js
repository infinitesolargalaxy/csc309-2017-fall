const express = require('express');
            const app = express();

app.get('/users/:userId/books/:bookId', function (req, res) {
                // Access userId via: req.params.userId
                // Access bookId via: req.params.bookId
                res.send(req.params);
            })
	    
	    app.listen(3000);

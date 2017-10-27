const express = require('express');
            const app = express()
            const router = express.Router();
	    
	    var baseURL = 'https://api.spacexdata.com/v1/vehicles'
            
            // ...


            // Home page route
            router.get('/', (req, res) => {
                res.send('Wiki home page');
            })
            
            // About page route
            router.get('/about', (req, res) => {
                res.send('About this wiki');
            })

            app.use('/site', router)
	    
	    app.listen(3000);

            // the app will now be able to handle requests to /site and /site/about

# Fun with Express

We will be talking about

- Express Router
- app.route()
- Modularizing your Express app

## Express Router

Express Router is like a mini-version of an express app, but it only handles routes.  It allows you to use all the routing APIs to configure your routes.

To set it up, all you need is:

```javascript
// ./routes/router.js

var express = require('express'),
    router = express.Router();
```

Then you're ready to go!

You use the Router as you normally would when writing your routes in express.

```javascript
// ./routes/router.js

router.get('/', (req,res)=>{
  res.render('home');
});

router.post('/signup', (req,res)=>{
  // run your post route
});

//export your router
module.exports = router;
```

Include it in your server with: 

```javascript
// server.js

var router = require('./routes/router')

app.use('/', router)
```



## Writing multiple routes with the same URL using app.route()

Here's an easy way to simplify your code when writing your routes - `app.route()`!

```javascript
router.route('/profile')

    .get( (req,res)=>{
        res.redirect('/');
    })

    .post( (req,res)=>{
        var age = req.body.age,
            city = req.body.city,
            homepageUrl = req.body.homepage_url
            userId = req.session.user.id;

        db.postUserProfile(age,city,homepageUrl,userId)
            .then(()=>{ res.redirect('/sign'); })
            .catch((err)=>{ console.log(err); })
    });

	.put( (req, res)=>{
   		 res.send('Update the profile!');
  	});
```

This functions the same as writing….

```javascript
router.get('/profile', function(req,res){ /*...*/ })

router.post('/profile', function(req,res){ /*...*/ })

router.put('/profile', function(req,res){ /*...*/ })
```

This a quick and easy way to organize your routes which use the same URL.



## Modularizing Your Express App

Eventually, your Express apps will grow very large, to the point where you will have hundreds of lines of code in your server file.  If you haven't noticed by now, this can be a pain to maintain. So that's why it's a good idea to break off parts of your app into **modules**.  This is straightforward to do, and will allow you to better organize your quickly growing lines of code.

Here's a sample file structure that you could use:

```
- app
    ----- models/
    ------------- nerd.js
    ----- routes/
    ------------ routes.js
    ------config/
    -------------- db.js 
    ----- public/ <!-- all frontend, static content -->
    -------------- css/
    -------------- js/
    -------------- img/
    -------------- views/
    -------------------- home.html
    -------------------- profile.html
    ----- index.html
    - package.json
    - server.js
    - node_modules/
```

Let's put all the routes that we wrote into `./routes/routes.js`. You can put multiple files with multiple different routes in your routes directory!

After exporting the routes from **routes.js**, you need to include them to be used in your server file using `require()` and `app.use()`.  This can be done with any .js file~

```javascript
// ./config/db.js

module.exports = {
        url : 'postgres://mattfewer:yoyo@localhost:5432/petition'
    }


// server.js

var db = require('./config/db');
```
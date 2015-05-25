/*
 * # index.js
 */

// ## Load Required Modules

// Using [Express](http://expressjs.com/) for a simple server/router setup
var express = require('express');
var app = express();

// Avoid a 404 error for favicons with [`serve-favicon`](http://git.io/vTpcI)
var favicon = require('serve-favicon');

// Using [`morgan`](http://git.io/vTp3i) for logging HTTP requests
var logger = require('morgan');

// [`path`](http://bit.ly/1Hs2ZUv) is a filepath handling utility
var path = require('path');


// ## Set App Variables

// Check for a port in the ENV before setting one manually
app.set('port', process.env.PORT || 3000);

// Views are written using [Jade templates](http://jade-lang.com/)
app.set('views', path.join(__dirname, 'server/views/'));
app.set('view engine', 'jade');


// ## Create Routing

// The default route loads the home page.
app.get('/', ( req, res ) => {
  res.render('index', {
    currentUrl: ''
  });
});

// Example pages are loaded by slug
app.get('/:page/', ( req, res, next ) => {

  // - Make sure we're not getting a request for the favicon
  if (req.params.page!=='favicon.ico') {

    // - Try to render the template passed in the `page` param
    res.render(req.params.page, {

      // - Used for determining which menu item should be active
      currentUrl: req.path

    }, (err, html) => {

      // - If the template doesn't exist, send no output and move along (404)
      if (err) {
        next();
      } else {
        res.send(html);
      }

    });

  }

});


// ## Add Middleware

// Log requests in the console using morgan
app.use(logger('dev'));

// Static files are all stored in the `public` dir
app.use(express.static(path.join(__dirname, 'public')));

// Use the favicon in the public folder
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

// If something goes wrong with the server, pass along the error message
app.use((err, req, res, next) => {

  // - Log the full error stack for easier debugging
  console.error(err.stack);
  res.status(500).send(err.message);

});

// Add 404 handling
app.use((req, res, next) => {
  res.status(404).send("The page you requested doesn't exist.");
});


// ## Start the Server

var server = app.listen(app.get('port'), (  ) => {
  console.log('App started and listening on port %s', server.address().port);
});

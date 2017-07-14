import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from '../client/router.jsx';

const routes = createRoutes(appRouter());

const router = express.Router();

router.get('/home', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});








































// require('babel-register');
// var express = require('express');
// var path = require('path');
// // var favicon = require('serve-favicon');
// var Server = require('http').Server;
// var renderToString = require("react-dom/server").renderToString;
// var appRouter = require('./components/AppRouter.jsx');
// const routes = createRoutes(appRouter());
// var RouterContext = require('react-router-dom').RouterContext;
// var match = require('react-router').match;
// const app = express();
// const server = new Server(app);

// // Express.js route

// app.get('*', (req, res) => {
//   match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//     // check for error and redirection
//     const content = renderToString("<p>Hello</p>");
//     res.send(context);
//     // pass content to jade view (we'll see it in a while)
//   })
// })

// console.log("Server is running....")

// // start the server
// const port = process.env.PORT || 3001;
// const env = process.env.NODE_ENV || 'production';
// server.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   console.info(`EXEEEEEEEEEEEEEE: Server running on http://localhost:${port} [${env}]`);
// });



























// 'use strict';

// import path from 'path';
// import { Server } from 'http';
// import Express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import routes from './routes';
// import NotFoundPage from './components/NotFoundPage';

// // initialize the server and configure support for ejs templates
// const app = new Express();
// const server = new Server(app);
// app.set('view engine', 'ejs');

// // app.set('views', path.join(__dirname, 'views'));

// // define the folder that will be used for static assets
// app.use(Express.static(path.join(__dirname, 'static')));

// // universal routing and rendering
// app.get("/", (req, res) => {
//     match()
// });

// app.get('*', (req, res) => {
//   match(
//     { routes, location: req.url },
//     (err, redirectLocation, renderProps) => {

//       // in case of error display the error message
//       if (err) {
//         return res.status(500).send(err.message);
//       }

//       // in case of redirect propagate the redirect to the browser
//       if (redirectLocation) {
//         return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       }

//       // generate the React markup for the current route
//       let markup;
//       if (renderProps) {
//         // if the current route matched we have renderProps
//         markup = renderToString(<RouterContext {...renderProps}/>);
//       } else {
//         // otherwise we can render a 404 page
//         markup = renderToString(<NotFoundPage/>);
//         res.status(404);
//       }

//       // render the index template with the embedded React markup
//       return res.render('index', { markup });
//     }
//   );
// });

// // start the server
// const port = process.env.PORT || 3000;
// const env = process.env.NODE_ENV || 'production';
// server.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   console.info(`Server running on http://localhost:${port} [${env}]`);
// });
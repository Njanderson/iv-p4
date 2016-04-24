"use strict";
// Importing node modules
import express from 'express';
// Importing source files
import routes from './routes/main.routes';
// import http
import http from 'http';
// consts
const app = express();

app.use('/', routes);

// arrow functions
const server = app.listen(3001, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`app listening at http://${address}:${port}`);
});
	

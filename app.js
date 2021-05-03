'use strict'

const express = require('express');

const server = express();

const PORT =8080;

server.use(express.urlencoded({ extended: false }));
server.use(express.json());



// HOTELS ENDPOINTS
server.use('/hotels', hotelsRouter);
// MAP ENDPOINT
server.use('/map', mapRouter);

// NODEMAILER ENDPOINT
server.use('/nodemailer', nodemailerRouter);


server.listen(PORT, () => {
  console.log(`API server running at  PORT:${PORT}`);
});
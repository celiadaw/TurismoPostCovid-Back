const express = require('express');
const router = express.Router();
const nodemailerController = require('../controllers/nodemailerController');

//Endpoint que recibe los datos de contacto y los envía al email del hotel (front nos envía este dato o algún dato para buscar el mail del hotel)
router
  .route('/contact')
  .post(nodemailerController.contact)
  


  module.exports = router;
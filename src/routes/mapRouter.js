const express = require('express');
const router = express.Router();
const  mapController = require('../controllers/mapController');

//Este Endpoint tiene que recibir los mismos datos que router  
    // .route('/resultOfsearch').get(hotelsController.getResults)
router
  .route('/getMap')
  .get(mapController.getMap)
  


  module.exports = router;
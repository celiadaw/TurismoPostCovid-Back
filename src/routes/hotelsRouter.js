  
const express = require('express');
const router = express.Router();
const hotelsController = require('../controllers/hotelsController');


//Endpoint que busque los hoteles de la ubicación indicada , que tengan habitaciones disponibles
//en las fechas indicadas, con la capacidad de personas indicada y que tengan disponibles al menos  las habitaciones indicadas
router  
    .route('/results')
    .get(hotelsController.getResults)


//Endpoint que devuelve los datos del hotel seleccionado
router  
    .route('/hotelDetail/:id')
    .get(hotelsController.gethotelDetail)


/*Endpoint que devuelve los hoteles cuya dirección se ubique en la que pasamos por paramétros
*/
router
  .route('/destination')
  .get(hotelsController.getDestination);

//Endpoint que devuelve los hoteles con habitaciones libres en ese rango de fechas
router
  .route('/datePicker')
  .get(hotelsController.getDatePicker)
//Endpoint que devuelve las habitaciones de los hoteles que tengan capacidad para ese número de personas
router
  .route('/numPersons')
  .get(hotelsController.getNumPersons)
 //Endpoint que devuelve el número de habitaciones disponibles 
router
.route('/numRooms')
.get(hotelsController.getNumRooms)




module.exports = router;
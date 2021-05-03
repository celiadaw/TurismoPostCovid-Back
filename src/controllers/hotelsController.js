
const { doQuery } = require('../utilities/doQuery');

//Endpoint que busque los hoteles de la ubicación indicada , que tengan habitaciones disponibles
//en las fechas indicadas, con la capacidad de personas indicada y que tengan disponibles al menos  las habitaciones indicadas
exports.getResults = async (req, res) => {}



//Endpoint que devuelve los datos del hotel seleccionado
exports.gethotelDetail = async (req, res) => {}

/*Endpoint que devuelve los hoteles cuya dirección se ubique en la que pasamos por paramétros
*/
exports.getDestination = async (req, res) => {}

exports.getDatePicker = async (req, res) => {}
//Endpoint que devuelve los hoteles con habitaciones libres en ese rango de fechas
exports.getNumPersons= async (req, res) => {}

//Endpoint que devuelve el número de habitaciones disponibles

exports.getNumRooms = async (req, res) => {}
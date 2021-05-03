//si utilizamos mysql directamente, con esto podemos hacer la conexión para las consultas a la bd
 


const dbConnection = require('../dataBase/db');
const doQuery = (query) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(query, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

exports.doQuery = doQuery;
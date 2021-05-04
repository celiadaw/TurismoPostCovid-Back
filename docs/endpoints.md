# ENDPOINTS



## HOTELS

**/results** _GET_ Devuelve el resultado de la búsqueda principal, los hoteles (filtrando por destino,rango de fechas,nº habitaciones y capacidad de la habitación)


 
**/hotelDetail/:id** _GET_  Devuelve los datos del hotel seleccionado


Estos endPoints los he hecho siguiendo el "user flow"
**/destination** _GET_ Devuelve los hoteles de la dirección (ciudad??) que le pasamos por parametros

**/datePicker**_GET_ devuelve los hoteles con habitaciones libres en ese rango de fechas

**/numPersons** _GET_ devuelve el número de habitaciones disponibles con esa capacidad

**/numRooms**_GET_ devuelve el número de habitaciones disponibles



## MAP

Estos endPoints los he hecho siguiendo el "user flow"
**/getMap** _GET_ Debe recibir los mismos datos que **/results** de ## HOTELS


## NODEMAILER

Estos endPoints los he hecho siguiendo el "user flow"
**/contact** _POST_ Realiza la reserva , envía email al hotel con los datos de la reserva y el nuevo cliente
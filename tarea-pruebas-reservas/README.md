# Lab-Apps-Web:
Pruebas unitarias, autenticación y persistencia en MongoDB.

# INSTRUCCIONES:

1. Descargar el respositorio (clonar o zip)
2. Abrir una terminal en el proyecto y correr '$ npm i'
3. Abrir MongoDB con un localhost
4. Correr '$ npm run devstart' en la terminal del proyecto
5. Desde el nabegador ingresar a ethereal.email e ingresar con la cuenta especificada en el archivo de mailer.js
6. Abrir una nueva terminal y correo '$ npm run mochatest' para correr las pruebas unitarias 
7. En http://localhost:3000/login ingresar con un usuario existente en la base de datos de MongoDB y qye haya sido autenticado, si aún no hay usuarios entonces proceder a crear un nuevo usuario 
8. Dentro de la ehtereal validar el usuario, también se puede hacer de forma manual desde MongoDB
9. Una vez que se haya autenticado el usuario con su token, ingresar nuevamente en la página de login y entrar con las credenciales del usuario 
10. Dentro del menú pricipal dar click en la opción de 'Bicicletas'
11. En la lista de Bicicletas dar click en el botón de 'Reservar' para poder reservar una bicicleta
12. En la página de reservación ingresar la fecha de inicio y fin de la reserva, así como los otros datos que solicita
13. Dar click en guardar y de esta manera podemos observar que las reserva fue realizada exitosamente 





const functions = require('firebase-functions');

//LEER--> Para importar solamente ' user ' se escribe ' firebase deploy --only functions:user '
//LEER--> Para importar una functions en especifico dentro de ' user ' se escribe ' firebase deploy --only functions:product.FUNCION_A_IMPORTAR '

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.notification = require('./notification.js');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(); //Init firebase
var messaging = admin.messaging();
const db = admin.firestore();

exports.sendNotification  = functions
  .firestore
  .document('pedidos/{pedidoId}')
  .onCreate(async (req,res)=>{
    const newOrder = req.data(); //Guardo toda la informacion de lo que se esta creando

    let registrationTokens = [];

    await searchTokensInDbTheManagers().then(res=>registrationTokens=res.slice()).catch(error=>console.log("ERROR AL SOLICITAR TODOS LOS TOKENS DE LOS USUARIOS",error)); //Copio todos los tokens autorizados para recibir el mensaje

    const message = {
      data: {
        title: 'Nuevo Pedido!',
        body: `Pedido de ${req.data().sucursal}`,
        click_action: "http://localhost:3000/",
        icon:'https://image.flaticon.com/icons/png/512/303/303605.png',
        sucursal:req.data().sucursal,
      },
      tokens: registrationTokens,
    };
    console.log("MENSAJE QUE SERA DIFUNDIDO= ", message)

    return await messaging.sendMulticast(message)
      .then((response)=>{
        console.log('La cantidad de mensajes difundidos exitosamente fueron= '+ response.successCount )
        return req.ref.set({
        "uid": res.params.pedidoId,
        "fecha_creado":admin.firestore.FieldValue.serverTimestamp()},{merge:true})
      })
      .catch((error)=>console.log('ERROR AL ENVIAR MSJS:', error))
  });

//Se utiliza en sendNotification.
const searchTokensInDbTheManagers = async () => {    //Busca los tokens de los empleados a los cuales le llegaran las notificaciones.
  return await db.collection('usuarios')
  .where("isDelete", "==", false)
  .get()
  .then((response)=>{
    const docs = []; //Almaceno todos los tokens de los usuarios en este array

    response.forEach(doc => {
      var data = doc.data();

      //Si es alguno de estos roles, recibiran la notificacion
      if (data.isAdmin || data.isManager || data.isLogistica) {
        if (data.tokens) {
          data.tokens.forEach(doc=>{
            docs.push(doc);
          });
        }
      }
    })

      console.log("TODOS LOS TOKENS AUTORIZADOS PARA NOTIFICAR CON F.C.M SON=", docs)
      return docs;
  })
}

//Guardo la notificacion de FCM en la base de datos. En la coleccion de "notificaciones".
exports.newNotificationSaveFech = functions
  .firestore
  .document('notificaciones/{notificacionesId}')
  .onCreate((req,res)=>{
    return req.ref.set({
      "uid": res.params.notificacionesId, //<--- BORRAR
      "fecha_creado":admin.firestore.FieldValue.serverTimestamp()
    },{merge:true})
  })

//Registra cada nueva notificacion y la suma a la coleccion " contadorColecciones" para tener implementado un contador.
exports.counterNotification = functions
  .firestore
  .document('notificaciones/{notificacionesId}')
  .onCreate((req,res)=>{
    const doc = db.collection('contadorColecciones').doc('notificaciones');

    return doc.get().then((result=>{
      const info = {value: result.data().value+1};
      console.log('Archivo modificado con los datos de =>',info);
      return doc.update(info);
    }))
  })
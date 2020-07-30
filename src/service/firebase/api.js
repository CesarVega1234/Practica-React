import { db } from './setup';
//TODO = Verificar antes de realizar la consulta el rol del usuario actual. Y si es valido el rol

const COLECCION_USUARIOS = db.collection('usuarios'); //Se encuentran todos los usuarios
const COLECCION_PEDIDOS = db.collection('pedidos'); //Se encuentran todos los pedidos
const COLECCION_NOTIFICACIONES = db.collection('notificaciones'); //Donde estan todas las notificaciones generadas por FCM.

export async function createNewOrder(data) {
  return await COLECCION_PEDIDOS.doc().set(data);
}

export async function borrarPedido(id) {
  return await COLECCION_PEDIDOS.doc(id).delete();
}

export async function modificarPedido(id,data) {
  return await COLECCION_PEDIDOS.doc(id).update(data);
}

export async function saveToken(email,token){
  return await COLECCION_USUARIOS.doc(email)
    .get()
    .then(result=>{
      var band = false;

      var arrayAfterTokens = result.data().tokens.slice();

      arrayAfterTokens.forEach(element => {
        if (element === token) {
          return band = true;
        }
      });
      if (!band) {
        arrayAfterTokens.push(token);
        COLECCION_USUARIOS.doc(email).update({tokens:arrayAfterTokens})
        alert('Nuevo token guardado con existo')
      }
    })
    .catch(err=>console.error(err))
}

//Lo utilizo en las functions de firebase.
export async function saveNewMessageForFCM(message){
  return await  COLECCION_NOTIFICACIONES.doc().set(message);
}
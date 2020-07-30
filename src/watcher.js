import { auth ,db } from './setup';

let cant_notifications = 20;

export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
      //Si el usuario existe y no es anonimo
      if (user && !user.isAnonymous) {
           db.collection('usuarios')
            .onSnapshot((snapshot)=>{

              const docs = [];

              snapshot.forEach(doc => {
                const data = doc.data();
                docs.push({
                  ...data,
                  id:doc.id
                });
              });
              let res = docs.find(n=>n.id === user.email); //Busco el email del usuario actual.

              if (res) { //Si existe devuelvo el usuario
                callback({
                  id:user.uid,
                  email:user.email,
                  displayName:user.displayName,
                  isDelete:res.isDelete, //No esta eliminado de la coleccion de usuarios
                  isAdmin:res.isAdmin,
                  isEmpleado:res.isEmpleado
                });
              } else { //Si no existe, devuelvo el usuario actual
                callback({
                  isDelete:true,//El usuario actual no esta registrado en la coleccion de usuarios
                });
              }
            })
      }else{
        callback(null); //Cerro sesion el usuario actual
      }
    });

    return unsub;
}

export function watchLogOut() {
  window.location.reload(); //Solucion al error en consola de "Missing or insufficient permissions."
  const unsub = auth.signOut();
  return unsub;
}

//Estara vigilando los cambios de pedidos
export function watchPedidos(callback) {
    const unsub = db
      .collection('pedidos')
      .onSnapshot((snapshot)=>{
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          docs.push({
            ...data,
            id:doc.id
          });
        });

        callback(docs);
      });

    return unsub;
}

//Devovlera todos los pedidos que sean del usuario actual
export function watchOrdersForUser(callback) {
  var user = auth.currentUser;
  if (user) {
    db.collection('pedidos')
      .onSnapshot((snapshot)=>{
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (user.email === data.email) {
            docs.push({
              ...data,
              id:doc.id
            });
          }
        });

        callback(docs);
      });
  }
  return null;
}

//Devuelve todo el listado de usuarios
export function watchUsers(callback){
      const users = db
      .collection('usuarios')
      .onSnapshot((snapshot)=>{
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          docs.push({
            ...data,
            id:doc.id
          });
        });

        callback(docs);
      });
    return users;
}

//Devuelve todo el stock
export function watchStock(callback) {
    const unsub = db
      .collection('stock')
      .onSnapshot((snapshot)=>{
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          docs.push({
            ...data,
            id:doc.id
          });
        });
        callback(docs);
      });

    return unsub;
}

//Devuelve todo el stock
export function watchNotifications(callback) {
    const unsub = db
      .collection("notificaciones")
      .limit(cant_notifications)
      .orderBy("fecha_creado", "desc")
      .onSnapshot((snapshot)=>{
        console.log('ejecuto el metodo');
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          docs.push({
            ...data,
            id:doc.id
          });
        });
        callback(docs);
      });

    return unsub;
}

//Observer de la coleccion "contadorColecciones"
export function watchContadorColecciones(callback) {
    const unsub = db
      .collection("contadorColecciones")
      .onSnapshot((snapshot)=>{
        const docs = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          docs.push({
            ...data,
            id:doc.id
          });
        });
        callback(docs);
      });

    return unsub;
}
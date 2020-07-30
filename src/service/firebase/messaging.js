import { messaging } from './setup';
import { saveToken,saveNewMessageForFCM } from './api';
import { watchUserChanges } from './watcher';

export const askForPermissioToReceiveNotifications = () => {
  messaging.requestPermission()
  .then(()=>{
    console.log('Have Permission')
    return messaging.getToken();
  })
  .then((token)=>{
    watchUserChanges((user)=>{
      saveToken(user.email,token)
    })
  })
  .catch(err=>{
    console.log('Error en __askForPermissioToReceiveNotifications = ',err)
  });
};

export const onMessages = () => {
  messaging.onMessage((payload)=>{
   console.log('muestro payload de on message',payload);
   saveNewMessageForFCM(payload);
  })
}
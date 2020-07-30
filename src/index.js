import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/routes/Routes';
import { BrowserRouter,Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import { UsuariosContextProvider } from './context/usuarios';
import { Provider } from 'react-redux';
import { watchUserChanges }from './services/firebase';
import {messaging} from '../src/services/firebase/index';
import Root from './components/routes/root';
import 'semantic-ui-css/semantic.min.css';
import store from './redux/store';

watchUserChanges((user)=>{ //Eliminar!! Muestra la cuenta loggueada
  console.log(user);
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('../public/firebase-messaging-sw.js')
  .then((registration) => {
    messaging.useServiceWorker(registration);
  });
}

const App = (
      <Provider store={store}>
        <BrowserRouter>
          <UsuariosContextProvider>
            <AuthContextProvider>
                  <Root>
                    <Switch>
                      <Routes/>
                    </Switch>
                  </Root>
            </AuthContextProvider>
            </UsuariosContextProvider>
        </BrowserRouter>
      </Provider>
);

ReactDOM.render(App, document.getElementById('root'));


import { createStore, combineReducers, applyMiddleware } from 'redux';
import pedidos from './reducers/pedidos';
import notification from './reducers/notification';
import stock from './reducers/stock';
import users from './reducers/users';
import contadorColecciones from './reducers/contadorColecciones';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  pedidos,
  users,
  stock,
  notification,
  contadorColecciones
});

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const store = createStore(reducer,applyMiddleware(thunk,logger));

export default store;
import { createAction } from 'redux-actions';
import {
  watchPedidos,
  watchOrdersForUser
}from '../../services/firebase/watcher.js';
import {
  createNewOrder,
} from '../../services/firebase/api.js';

export const handleApiError = createAction('handleApiError');

export const createOrderSuccess = createAction('createOrderSuccess');
export const createOrder = (data) => async (dispatch) => {
  try {
    await createNewOrder(data);
    dispatch(createOrderSuccess(data))
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const getOrderSuccess = createAction('getOrderSuccess');
export const getOrder = () => async (dispatch) => {
  try {
    await watchPedidos(res=>{
      let arr = res.slice();
      dispatch(getOrderSuccess(arr))
    });
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const getOrderForUserSuccess = createAction('getOrderForUser');
export const getOrderForUser = () => async (dispatch) => { //Devuelve los pedidos del usuario actualmente loggueado
  try {
    await watchOrdersForUser(res=>{
      let arr = res.slice();
      dispatch(getOrderForUserSuccess(arr))
    });
  } catch (error) {
    dispatch(handleApiError(error));
  }
};


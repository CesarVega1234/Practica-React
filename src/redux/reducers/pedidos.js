import { handleActions } from 'redux-actions';
import { createOrderSuccess, getOrderSuccess, getOrderForUserSuccess } from '../actions/order';

export default handleActions({
  [createOrderSuccess]: (state,action) => {
    return [...state,action.payload];
  },

  [getOrderSuccess]: (state,action) => {
    return action.payload;
  },

  [getOrderForUserSuccess] : (state,action) =>{
    return action.payload;
  },
},[]);
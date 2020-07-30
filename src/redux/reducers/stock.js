import { handleActions } from 'redux-actions';
import { addStock, getStockSuccess } from '../actions/stock';

export default handleActions({
  [addStock]: (state,action) => {
    return  [...state,action.payload];
  },

  [getStockSuccess]: (state,action) => {
    return action.payload;
  },
},[]);
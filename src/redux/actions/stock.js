import { createAction } from 'redux-actions';
import { 
  watchStock
}from '../../services/firebase/watcher.js';

export const handleApiError = createAction('handleApiError');

export const addStock = createAction('addStock');

export const getStockSuccess = createAction('getStockSuccess');
export const getStock = () => async (dispatch) => {
  try {
    await watchStock(res=>{
      let arr = res.slice();
      dispatch(getStockSuccess(arr))
    });
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

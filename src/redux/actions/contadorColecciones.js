import { createAction } from 'redux-actions';
import { 
  watchContadorColecciones
}from '../../services/firebase/watcher.js';

export const handleApiError = createAction('handleApiError');

export const getContadorColeccionesSuccess = createAction('getContadorColeccionesSuccess');
export const getContadorColecciones = () => async (dispatch) => {
  try {
    await watchContadorColecciones(res=>{
      let arr = res.slice();
      dispatch(getContadorColeccionesSuccess(arr))
    });
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

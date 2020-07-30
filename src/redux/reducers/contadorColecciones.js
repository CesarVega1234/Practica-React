import { handleActions } from 'redux-actions';
import { getContadorColeccionesSuccess } from '../actions/contadorColecciones';

export default handleActions({
  [getContadorColeccionesSuccess]: (state,action) => {
    return action.payload;
  },
},[]);
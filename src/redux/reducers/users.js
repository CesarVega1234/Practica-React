import { handleActions } from 'redux-actions';
import { saveTokenInReduxSuccess,getUsersSuccess } from '../actions/users';

export default handleActions({
  [getUsersSuccess]: (state,action) => {
    return action.payload;
  },
  [saveTokenInReduxSuccess]: (state,action) => {
    return true;
  }
},[]);
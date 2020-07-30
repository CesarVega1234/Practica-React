import { handleActions } from 'redux-actions';
import { getNotificationSuccess } from '../actions/notification';

export default handleActions({
  [getNotificationSuccess]: (state,action) => {
    return action.payload;
  },
},[]);
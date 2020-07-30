import { createAction } from 'redux-actions';
import { 
  watchNotifications
}from '../../services/firebase/watcher.js';

export const handleApiError = createAction('handleApiError');

export const getNotificationSuccess = createAction('getNotificationSuccess');
export const getNotification = () => async (dispatch) => {
  try {
    await watchNotifications(res=>{
      let arr = res.slice();
      dispatch(getNotificationSuccess(arr))
    });
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

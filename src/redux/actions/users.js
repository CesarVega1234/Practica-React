import { createAction } from 'redux-actions';
import {
  saveToken,
  watchUsers
}from '../../services/firebase';

export const handleApiError = createAction('handleApiError');

export const saveTokenInReduxSuccess = createAction('saveTokenInReduxSuccess')
export const saveTokenInRedux = (email,token) => async (dispatch) => {
  try {
    await saveToken(email,token);
    dispatch(saveTokenInReduxSuccess());
  } catch (error) {
    dispatch(handleApiError(error))
  }
}

export const getUsersSuccess = createAction('getUsersSuccess')
export const getUsers = () => async (dispatch) => {
  try {
    await watchUsers(res=>{
      let arr = res.slice();
      dispatch(getUsersSuccess(arr));
    });
  } catch (error) {
    dispatch(handleApiError(error))
  }
}
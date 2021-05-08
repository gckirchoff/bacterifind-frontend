import axios from 'axios';
import { UserActionTypes } from '../actionTypes';

export const login = (loginInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.NODE_ENV === 'production'
          ? '/api/v1/users/login'
          : 'http://127.0.0.1:3005/api/v1/users/login',
        loginInfo
      );
      dispatch({
        type: UserActionTypes.LOG_IN,
        payload: data.data.user,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const signup = (signupInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.NODE_ENV === 'production'
          ? '/api/v1/users/signup'
          : 'http://127.0.0.1:3005/api/v1/users/signup',
        signupInfo
      );
      dispatch({
        type: UserActionTypes.SIGN_UP,
        payload: data.data.user,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const createNote = (noteInfo, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.NODE_ENV === 'production'
          ? '/api/v1/notes'
          : 'http://127.0.0.1:3005/api/v1/notes',
        { ...noteInfo, user: id, date: Date.now() }
      );
      dispatch({
        type: UserActionTypes.CREATE_NOTE,
        payload: data.data.newNote,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const editNote = (id) => {
  return {
    type: UserActionTypes.EDIT_NOTE,
    payload: id,
  };
};

export const cancelEdit = (id) => {
  return {
    type: UserActionTypes.EDIT_CANCEL,
    payload: id,
  };
};

export const updateNote = (comments, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        process.env.NODE_ENV === 'production'
          ? `/api/v1/notes/${id}`
          : `http://127.0.0.1:3005/api/v1/notes/${id}`,
        { comments }
      );
      dispatch({
        type: UserActionTypes.UPDATE_NOTE,
        payload: data.data.note,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        process.env.NODE_ENV === 'production'
          ? `/api/v1/notes/${id}`
          : `http://127.0.0.1:3005/api/v1/notes/${id}`
      );
      dispatch({
        type: UserActionTypes.DELETE_NOTE,
        payload: id,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

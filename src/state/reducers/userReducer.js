import produce from 'immer';
import { UserActionTypes } from '../actionTypes';

const initialState = {
  user: null,
};

const userReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_IN:
      state.user = action.payload;
      state.user.notes.map((note) => (note.editing = false));
      break;

    case UserActionTypes.EDIT_NOTE:
      // state.user.notes.map((note) =>
      //   note._id === action.payload ? (note.editing = true) : note );
      const editIndex = state.user.notes.findIndex(
        (note) => note._id === action.payload
      );
      if (editIndex !== -1) state.user.notes[editIndex].editing = true;
      break;

    case UserActionTypes.EDIT_CANCEL:
      const cancelIndex = state.user.notes.findIndex(
        (note) => note._id === action.payload
      );
      if (cancelIndex !== -1) state.user.notes[cancelIndex].editing = false;
      break;

    case UserActionTypes.SIGN_UP:
      state.user = action.payload;
      state.user.notes = [];
      break;

    case UserActionTypes.CREATE_NOTE:
      action.payload.editing = false;
      state.user.notes.push(action.payload);
      break;

    case UserActionTypes.DELETE_NOTE:
      const deleteIndex = state.user.notes.findIndex(
        (note) => note._id === action.payload
      );
      if (deleteIndex !== -1) state.user.notes.splice(deleteIndex, 1);
      break;

    default:
      return state;
  }
});

export default userReducer;

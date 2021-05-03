import produce from 'immer';
import { BacteriaActionTypes } from '../actionTypes/';

const initialState = {
  codeId: '',
};

const bacteriaReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case BacteriaActionTypes.CODE_SET:
      state.codeId = action.payload;
      return state;
    default:
      return state;
  }
});

export default bacteriaReducer;

import { BacteriaActionTypes } from '../actionTypes';

export const codeSet = (codeId) => ({
  type: BacteriaActionTypes.CODE_SET,
  payload: codeId,
});

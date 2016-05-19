
import { ADD_OPERATION } from '../constants/ActionTypes';

export function addOperation({ input, operand }) {
  return {
    type: ADD_OPERATION,
    payload: {
      input,
      operand,
    }
  };
}

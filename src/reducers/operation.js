
import { ADD_OPERATION } from '../constants/ActionTypes';


function executeOperation(state, { payload }) {
  const { input, operand } = payload;
  switch (operand) {
    case '+':
      return [
        ...state,
        {
          operand,
          result: input[0] + input[1]
        }
      ];
    case '/':
      return [
        ...state,
        {
          operand,
          result: input[0] / input[1]
        }
      ];
    case '%':
      return [
        ...state,
        {
          operand,
          result: input[0] % input[1]
        }
      ];
    default:
      return state;
  }
}

export default function operationReducer(state = [], action) {
  switch (action.type) {
    case ADD_OPERATION:
      return executeOperation(state, action);
    default:
      return state;
  }
}
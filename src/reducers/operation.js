
import { ADD_OPERATION } from '../constants/ActionTypes';

function isPrime(i) {
  for (let c = 2; c <= Math.sqrt(i); ++c) {
    if (i % c === 0) return false;
  }
  return true;
}

function primeMax(n, m) {
  if (n === m) {
    return isPrime(n) ? n : null;
  }

  const list = [];

  for (let i = n; i !== m; ++i) {
    if (isPrime(i)) {
      list.push(i);
    }
  }
  return Math.max(...list);
}

function executeOperation(state, { payload }) {
  const { input, operand } = payload;
  switch (operand) {
    case 'sum':
      return [
        ...state,
        {
          operand,
          result: input[0] + input[1]
        }
      ];
    case 'divide':
      return [
        ...state,
        {
          operand,
          result: Math.round((input[0] / input[1]) * 1000) / 1000
        }
      ];
    case 'remainder':
      return [
        ...state,
        {
          operand: 'remainder of a division',
          result: input[0] % input[1]
        }
      ];
    case 'prime':
      return [
        ...state,
        {
          operand: 'highest prime number',
          result: primeMax(input[0], input[1])
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


import * as actions from '../operation';

describe('operation actions', () => {
  it('should create new operation', () => {
    const action = actions.addOperation({
      operand: 'sum',
      input: [1, 2]
    });
    const { type, payload } = action;
    expect(type).equal('ADD_OPERATION');
    expect(payload.operand).equal('sum');
    expect(payload.input[0]).equal(1);
    expect(payload.input[1]).equal(2);
  });
});


import { executeOperation } from '../operation';

describe('operation reducer', () => {
  it('shoud sum two numbers', () => {
    const payload = { input: [1, 2], operand: 'sum' };
    const [firstRes] = executeOperation([], { payload });
    expect(firstRes.operand).equal('sum');
    expect(firstRes.result).equal(3);
  });

  it('shoud divide two numbers', () => {
    const payload = { input: [4, 2], operand: 'divide' };
    const [firstRes] = executeOperation([], { payload });
    expect(firstRes.operand).equal('divide');
    expect(firstRes.result).equal(2);
  });

  it('shoud remainder two numbers', () => {
    const payload = { input: [4, 3], operand: 'remainder' };
    const [firstRes] = executeOperation([], { payload });
    expect(firstRes.operand).equal('remainder of a division');
    expect(firstRes.result).equal(1);
  });

  it('shoud find highest prime number two numbers', () => {
    const payload = { input: [1, 4], operand: 'prime' };
    const [firstRes] = executeOperation([], { payload });
    expect(firstRes.operand).equal('highest prime number');
    expect(firstRes.result).equal(3);
  });
});

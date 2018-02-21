const Actions = require('./index');

describe('Testing the return values of the actions', () => {
  test('Should return a action object', () => {
    expect(typeof Actions.getAction).toBe('function');
  });
  test('Should return the following action object', () => {
    expect(Actions.getAction('abc')).toEqual({
      type: 'GETBOOKS',
      payload: { bookData: 'abc' },
    });
  });
});

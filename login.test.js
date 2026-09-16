const { login } = require('./login');

describe('login()', () => {
  test('đúng user + đúng pass => true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai pass => false', () => {
    expect(login('admin', '1234')).toBe(false);
  });

  test('sai user => false', () => {
    expect(login('guest', '123')).toBe(false);
  });
});

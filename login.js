function login(user, pass) {
  return user === 'admin' && pass === '1234';
}

// Guard để file dùng được cả trong browser lẫn Jest (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}

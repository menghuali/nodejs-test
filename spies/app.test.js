const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  var email = 'mli@gamil.com';
  var password = '123abc';
  app.handleSignup(email, password);

  it('should call saveUser with user object', () => {
    expect(db.saveUser).toHaveBeenCalled().toHaveBeenCalledWith({email, password});
  });
});

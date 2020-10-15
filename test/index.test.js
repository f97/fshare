/* eslint-disable no-undef */
const login = require('../lib');

const user = {
  user_email: process.env.FSHARE_EMAIL,
  password: process.env.FSHARE_PASSWORD
};

const loginSuccessfullyMsg = RegExp('Login successfully');
const fshare = RegExp('fshare.vn');

jest.setTimeout(30000);

test('test login API', (done) => {
  login.login(user)
    .then((response) => {
      expect(loginSuccessfullyMsg.test(JSON.stringify(response))).toBe(true);
      done();
    });
});

test('test download API', async (done) => {
  const { token, session_id: sessionID } = await login.login(user);
  login.download(token, sessionID, 'https://www.fshare.vn/file/SQZH66ZA5MDO')
    .then((response) => {
      expect(fshare.test(JSON.stringify(response.location))).toBe(true);
      done();
    });
});

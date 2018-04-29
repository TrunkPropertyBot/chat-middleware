const slack = require('../src/slackAdapter');
const nock = require('nock');

test('getResponse should send the message to the backend, wait for, then return the response', async (done) => {
  nock('https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com')
    .post('/dev/message')
    .reply(200, { message: 'hey there' });

  slack.getResponse('hey')
    .then(response => expect(response).to.equal('hey there'))
    .catch(e => done(e));

  done();
});

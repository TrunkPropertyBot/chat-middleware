const app = require('../src/app');
const request = require('supertest');
const nock = require('nock');

process.env.SLACK_TOKEN = 'xxxx-abcd';

beforeEach(() => {
  nock('https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com')
    .post('/dev/message')
    .reply(200, { output: { text: 'hey back' } });
});

test('Hitting our slack endpoint with a valid request should respond with a 200', (done) => {
  request(app).post('/slack/message').send({ event: { type: 'message', text: 'hey' } }).then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});

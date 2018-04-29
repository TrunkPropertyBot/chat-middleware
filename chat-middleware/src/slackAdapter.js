const axios = require('axios');
const { WebClient } = require('@slack/client');
const { log } = require('./utils');

// Setup Axios
const instance = axios.create({
  baseURL: 'https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com',
  timeout: 5000,
});

const getResponse = async (message) => {
  try {
    const response = await instance.post('/dev/message', { message });
    return response.data.output.text;
  } catch (e) {
    throw new Error(e);
  }
};

const sendResponse = async (message, channelID) => {
  if (typeof process.env.SLACK_TOKEN === 'undefined') throw new Error('env variable SLACK_TOKEN not set');

  const token = process.env.SLACK_TOKEN;
  const web = new WebClient(token);

  try {
    const result = await web.chat.postMessage({ channel: channelID, text: message, username: 'kermie' });
    log.info(result);
  } catch (e) {
    log.error(e);
  }
};

module.exports = { getResponse, sendResponse };

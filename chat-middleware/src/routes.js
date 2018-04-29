const slack = require('./slackAdapter');
const { log } = require('./utils');

module.exports = (app) => {
  // Monkey patch express so we can use async/await
  require('express-async-await')(app);

  app.post('/slack/message', async (req, res) => {
    // Slack will send us a challenge on first contact to verify our api exists
    // We just need to echo this back to them
    if (req.body.challenge) return res.status(200).json({ challenge: req.body.challenge });

    const eventType = req.body.event.type;

    if (eventType === 'message') {
      try {
        const channelID = req.body.event.channel;
        const response = await slack.getResponse(req.body.event.text);
        log.info(`channelID: ${channelID}\nresponse: ${response}`);
        slack.sendResponse(response, channelID);
        return res.status(200).json({ message: response });
      } catch (e) {
        return res.status(500).json({ error: e });
      }
    }
    return res.status(500).json({ error: 'something went wrong' });
  });
};

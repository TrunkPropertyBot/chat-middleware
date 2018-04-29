const {slack} = require('./slackAdapter');

module.exports = (app) => {
  // Monkey patch express so we can use async/await
  require('express-async-await')(app)

  app.post('/slack/message', async function(req, res, next) {
    // Slack will send us a challenge on first contact to verify our api exists
    // We just need to echo this back to them
    if (req.body.challenge) return res.status(200).json({challenge: req.body.challenge});

    let eventType = req.body.event.type;

    if (eventType === 'message'){
      slack.getReponse(req.body.event.text);
      console.log(`received message: ${req.body.event.text}`);
    }
  });

}

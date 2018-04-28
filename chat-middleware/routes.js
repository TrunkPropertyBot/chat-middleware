module.exports = (app) => {
  // Monkey patch express so we can use async/await
  require('express-async-await')(app)

  app.post('/receive-slack', async function(req, res, next) => {
    //TODO
  });
}

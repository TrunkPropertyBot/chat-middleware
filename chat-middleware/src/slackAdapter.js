const axios = require('axios');

const getResponse = async (message) => {
  // Setup Axios
  const instance = axios.create({
    baseURL: 'https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com',
    timeout: 5000
  });

  try {
    const response = await instance.post('/dev/message',{message:message});
    return response.data.output.text;
  } catch(e){
    throw new Error(e);
  }
}

module.exports = {getResponse}

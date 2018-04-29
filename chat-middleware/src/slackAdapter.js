const axios = require('axios');

const getReponse = (message) => {
  // Setup Axios
  const instance = axios.create({
    baseURL: 'https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com/dev/message',
    timeout: 5000
  });

  try {
    const response = await instance.post({message:message});
    return response.data;
  } catch(e){
    console.error(e);
  }
}

module.exports = {getReponse}

const axios = require('axios');
const API_URL = process.env.API_URL;

exports.fetchEvenTodos = async (limit) => {
  const promises = [];

  for (let i = 2; i <= limit * 2; i += 2) {
    promises.push(axios.get(`${API_URL}/${i}`));
  }
  
  const results = await Promise.all(promises);
  
  return results.map(response => response.data).filter((_, index) => index < limit);
};
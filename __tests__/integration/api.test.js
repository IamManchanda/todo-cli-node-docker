const axios = require('axios');
require('dotenv').config();

describe('API Endpoint Integration Test', () => {
  it('checks if the API endpoint is running', async () => {
    const response = await axios.get(`${process.env.API_URL}/2`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('completed');
  });
});

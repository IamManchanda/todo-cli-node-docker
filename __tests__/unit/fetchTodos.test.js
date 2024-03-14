const { fetchEvenTodos } = require('../../src/fetchTodos');
const axios = require('axios');

jest.mock('axios');

describe('fetchEvenTodos', () => {
  it('fetches and returns even numbered TODOs', async () => {
    axios.get.mockResolvedValueOnce({ 
      data: { id: 2, title: 'Test Todo 2', completed: false } 
    });

    const todos = await fetchEvenTodos(1);
    
    expect(todos).toEqual([
      { id: 2, title: 'Test Todo 2', completed: false },
    ]);
  });
});

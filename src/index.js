require('dotenv').config();
const { fetchEvenTodos } = require('./fetchTodos');

const main = async () => {
  try {
    const todos = await fetchEvenTodos(20);
    todos.forEach(todo => {
      console.log(`Title: ${todo.title}`);
      console.log(`Completed: ${todo.completed} \n`);
    });
  } catch (error) {
    console.error("Error fetching TODOs:", error);
  }
};

main();

# TODO CLI Application (Node.js and Docker)

This is a simple CLI application that fetches and displays the TODOs from the JSONPlaceholder API. The application is built using Node.js and Docker, and is designed with a focus on clean code, modularity, and also contains tests for unit and integration testing.

## Introduction

### Engineering Principles & Standards

The project adheres to a set of core engineering principles and standards aimed at ensuring code quality, maintainability, and efficient collaboration.

- **Clean Code**: The codebase is written in a clean, readable, and maintainable manner.
- **Modularity**: The codebase is modular, with each module having a single responsibility. The `fetchTodos` module is responsible for fetching the TODOs from the API.
- **DRY (Don't Repeat Yourself)**: The codebase follows the DRY principle, with aim to reduce redundancy and repetition. The shared logic is abstracted into reusable functions and modules, reducing code duplication and potential for errors.
-- **Testing**: The codebase is thoroughly tested, with a focus on unit and integration testing. The tests are written in a clean, readable, and maintainable manner, adhering to the same principles as the application codebase.

### System Extensibility & Scalability

The application is designed with future growth in mind and is extensible and scalable, with the following considerations:

- **Loose Coupling**: The application is designed with loose coupling in mind, with each module having a single responsibility and minimal dependencies on other modules. This allows for easy extensibility and modification of the application.
- **Environment Variables**: The application uses environment variables to manage configuration and settings, allowing for easy configuration and modification of the application in different environments.
- **Scalable architecture**: The use of Docker containers facilitates scalability. Containers can be rapidly deployed, scaled, and managed across different environments and distributed systems, allowing for efficient scaling of the application.

### Test Coverage

The application has a comprehensive test suite, covering both unit and integration tests. The tests are written in a clean, readable, and maintainable manner, adhering to the same principles as the application codebase. The test coverage ensures that the application functions as expected and that any changes or additions to the codebase are thoroughly tested.

- **Unit Tests**: The application has unit tests that cover the individual units of code, ensuring that each unit functions as expected in isolation.
- **Integration Tests**: The application has integration tests that cover the interaction between different units of code, ensuring that the units work together as expected.

### Brevity & Simplicity

The application is designed with brevity and simplicity in mind. The application follows best practices and standards, ensuring that the codebase is easy to understand and work with.

- **Concise & Readable Code**: The codebase is written in a concise, readable, and maintainable manner, with a focus on clarity and simplicity.
- **Simple & Intuitive Design**: The application is designed with simplicity and intuitiveness in mind, ensuring that the codebase is easy to understand and work with.
- **Minimal Dependencies**: The application has minimal dependencies, reducing complexity and potential for errors.
- **Clear Readme**: This README provides clear and concise instructions for installing, running, and testing the application, as well as an overview of the application design and principles.

## Installation and Usage

If you want to run the application without Docker, please first perform the "Common Installation Steps" and then "Default Non-Docker Installation (Node.js)" steps.

If you want to run the application with Docker, please first perform the "Common Installation Steps" and then "Docker Installation (Node.js and Docker)" steps.

### Common Installation Steps

1. Clone the repository:

  ```bash
  git clone https://github.com/IamManchanda/todo-cli-node-docker.git
  ```

2. Navigate to the project directory:

  ```bash
  cd todo-cli-node-docker
  ```

### Default Non-Docker Installation (Node.js)

1. Make sure you have Node.js installed on your machine. If not, download it from the official website: [Node.js Download](https://nodejs.org/en/download/).

2. Install the dependencies:

  ```bash
  npm install
  ```

3. Start the application:

  ```bash
  npm start
  ```

4. Run the tests:

  ```bash
  npm test
  ```

### Docker Installation (Node.js and Docker)

1. Install Docker on your machine by following the official documentation: [Docker Installation Guide](https://docs.docker.com/get-docker/).

2. Build the Docker image:

  ```bash
  docker build -t todo-cli-node-docker .
  ```

3. Run the Docker container (application):

  ```bash
  docker run -it todo-cli-node-docker
  ```

4. Run the tests:

  ```bash
  docker run -it todo-cli-node-docker npm run test
  ```

## CLI Outputs

1. For running the application:

  ```bash
  docker run -it todo-cli-node-docker # or, npm start
  ```

  ```txt
  Title: quis ut nam facilis et officia qui
  Completed: false

  Title: et porro tempora
  Completed: true

  Title: qui ullam ratione quibusdam voluptatem quia omnis
  Completed: false

  Title: quo adipisci enim quam ut ab
  Completed: true

  Title: illo est ratione doloremque quia maiores aut
  Completed: true

  Title: ipsa repellendus fugit nisi
  Completed: true

  Title: repellendus sunt dolores architecto voluptatum
  Completed: true

  Title: accusamus eos facilis sint et aut voluptatem
  Completed: true

  Title: dolorum est consequatur ea mollitia in culpa
  Completed: false

  Title: ullam nobis libero sapiente ad optio sint
  Completed: true

  Title: distinctio vitae autem nihil ut molestias quo
  Completed: true

  Title: adipisci non ad dicta qui amet quaerat doloribus ea
  Completed: false

  Title: aliquam aut quasi
  Completed: true

  Title: nesciunt totam sit blanditiis sit
  Completed: false

  Title: nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis
  Completed: true

  Title: earum doloribus ea doloremque quis
  Completed: false
  ```

2. For running the tests:

  ```bash
  docker run -it todo-cli-node-docker npm run test # or, npm test
  ```

  ```txt
  > todo-cli-node-docker@1.0.0 test
  > jest __tests__

  PASS  __tests__/unit/fetchTodos.test.js
    fetchEvenTodos
      ✓ fetches and returns even numbered TODOs (3 ms)

  PASS  __tests__/integration/api.test.js
    API Endpoint Integration Test
      ✓ checks if the API endpoint is running (313 ms)

  Test Suites: 2 passed, 2 total
  Tests:       2 passed, 2 total
  Snapshots:   0 total
  Time:        0.651 s
  Ran all test suites matching /__tests__/i.
  ```

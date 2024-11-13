# Node.js "Hello World" Application

This project is a basic Node.js application that responds with a "Hello World from Node.js!" message.

## Files

- `index.js`: Node.js application code.
- `package.json`: Node.js dependency file.
- `Dockerfile`: Definition to create a Docker image of the application.

## Prerequisites

To build and run the application in Docker, you need to have Docker installed. You can install Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started).

## How to build and run with Docker

1. **Build the Docker image**

In the terminal, inside the directory where the `Dockerfile` is located, run the following command to build the Docker image:

```bash
docker build -t hello-world-nodejs .

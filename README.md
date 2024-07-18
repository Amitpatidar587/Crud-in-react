# CRUD in React

This is a simple CRUD (Create, Read, Update, Delete) application built using React for the frontend and Node.js with Express and MongoDB for the backend. The application demonstrates how to perform basic CRUD operations using a full-stack approach.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)


## Features

- Create new items
- Read and display items
- Update existing items
- Delete items
- Responsive design

## Installation

To get started with the project, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
    git clone https://github.com/Amitpatidar587/Crud-in-react.git
    cd Crud-in-react

2. Install backend dependencies:
    cd backend
    npm install

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:
    MONGO_URI=mongodb://localhost:27017/your-database-name
    PORT=8080

4. Start MongoDB:
    mongosh

5. Start the backend server:
    npm start

### Frontend Setup

1. Install frontend dependencies:
    cd ../frontend
    npm install

## Usage

To start the application, follow these steps:

1. Make sure MongoDB is running:
    mongosh

2. Start the backend server:
    cd backend
    npm start

3. Start the frontend server:
    cd ../frontend
    npm start

The frontend application will be available at `http://localhost:3000`, and the backend server will be running at `http://localhost:5000`.

### Available Scripts

In both the `backend` and `frontend` directories, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder (frontend only).
- `npm run eject`: Removes the single build dependency from your project (frontend only).

## Project Structure

The project structure is as follows:


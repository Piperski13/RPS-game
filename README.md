# Rock Paper Scissors Game

This project is a Rock Paper Scissors game built using HTML, CSS, JavaScript, Node.js, and Express.js.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Description

The Rock Paper Scissors Game is a web application that allows users to play the classic Rock Paper Scissors game. The application features:

- **Main Game Route:** The root route (`/` or `http://localhost:3000/`) renders the game page using `index.html`.
- **Score Management:** A GET request to `/score` loads the current score from the server. After each move, the current score is saved to the server using a POST request to `/score`.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Piperski13/RPS-game.git
2. **Navigate to the project directory:**
   `cd RPS-game`
3. **Install the dependencies:**
   `npm install`
4. **Start the Node.js server:**
   `node app.js`
**The application will be running at http://localhost:3000.**

## Usage

### Main Game Route
Load the root route at [http://localhost:3000/](http://localhost:3000/) to start the game. This route renders the game page using `index.html`, and the `loadPages` function is called.

### Load Score
Inside the `loadPages` function, the `loadScore` async function sends a GET request to the server to load the score (`GET /score`).

### Save Score
After each move, the `saveScore` function sends a POST request to the server to save the current score (`POST /score`).

## API Endpoints

### GET /score
Fetches the current score from the server.

### POST /score
Saves the current score to the server.

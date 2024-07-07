The backend for the Quiz App is a server-side application that provides an API for the front-end to interact with. It uses  for authentication, MongoDB as the main database for storing quiz data and highscores, and Redis for storing and tracking current running games. The backend enables users to sign up, sign in, create their own quizzes with full CRUD support, play any quiz from the list of available quizzes, and track their scores with a highscore system. The game session lasts 60 minutes after which it is deleted. The tech stack used to build the backend includes MongoDB, Redis, Node.js, and Express.

repo for frontend - https://github.com/nusratalam123/quiz-app-frontend (will try to make it into a monorepo)

Game Flow
Sign up or log in to the app
The user selects a quiz to play.
The front-end sends a GET request to the backend's question endpoint to receive the first question.
The user answers the question by sending a POST request to the backend's answer endpoint with their answer.
The front-end sends another GET request to the backend's question endpoint to receive the next question.
Steps 3 and 4 are repeated until the user has answered all the questions or the session has expired.

Tech Stack
MongoDB for main database
Redis for storing and tracking current running games
Node.js for server-side logic
Express for building the server
Deployment
The backend is built using Node.js, Express and MongoDB, with Redis for storing the current running games. To deploy the application, make sure you have these dependencies installed and set up. The MongoDB database and Firebase authentication credentials will need to be set up and configured in the code.

Conclusion
The Quiz App Backend is a robust and scalable application that provides a seamless experience for users who want to play quizzes and create their own. The use of Firebase for authentication, MongoDB for storing quiz data and highscores, and Redis for storing and tracking current running games ensure that the app can handle large amounts of data and handle multiple users playing quizzes at the same time. The Node.js and Express tech stack provides a solid foundation for the backend, making it easy to develop, maintain, and scale.
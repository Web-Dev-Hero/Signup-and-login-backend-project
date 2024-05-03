
# Node.js Signup and Login Project

This project is a Node.js application that provides signup and login functionality with both cookie-based and JWT token authentication. It includes middleware for authentication and authorization.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Features

- User signup with name,email password,role.
- User login with email and password.
- Cookie-based authentication for web sessions.
- JWT token authentication for API access.
- Middleware for authentication and authorization checks.

## Installation

1. Clone the repository:

2. Install dependencies:

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:

Replace `your_jwt_secret` with a secure random string for JWT token encryption.

## Usage

1. Start the server:

2. Open your web browser and go to [http://localhost:5000](http://localhost:5000).

3. You can now sign up with a new account or log in with an existing one.

## Endpoints

- `POST /signup`: Create a new user account.
- `POST /login`: Log in with existing user credentials.
  

## Authentication

- **Cookie-based Authentication**: Used for web sessions. Sessions are managed using express-session middleware and stored in cookies.
- **JWT Token Authentication**: Used for API access. Tokens are generated upon successful login and sent in the Authorization header for protected routes.

## Middleware

- `auth`: Middleware for JWT token authentication. Checks if the request has a valid JWT token and sets `req.user` if authenticated.
-  `isStudent`: Middleware for authorization checks. Checks if the authenticated user is an Student.
- `isadmin`: Middleware for authorization checks. Checks if the authenticated user is an admin.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

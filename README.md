# Market Mate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Tech Tonic is a CMS-style blog site where developers can publish their blog posts, share their thoughts and opinions, and comment on other developers' posts. The application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Features

- User authentication (sign up, log in, log out)
- Dashboard for managing user's blog posts
- Create, update, and delete blog posts
- View and comment on other users' posts
- Responsive design for various screen sizes

## Installation

Please follow these simple steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root directory and add the following environment variables:
- DB_USER=<your_database_user>
- DB_PASSWORD=<your_database_password>
- DB_NAME=tech-tonic_db
- DB_HOST=<your_database_host>
- SESSION_SECRET=<your_session_secret>
4. Run the `schema.sql` file in the `db` folder using MySQL shell or another SQL client to create the `tech-tonic_db` database.
5.Start the server by running `npm start`.


The application will be available at `http://localhost:3001`.

## Usage

Visit the deployed application at `<your_heroku_app_url>`.

1. Click on the "Sign Up" link to create a new account.
2. Log in with your username and password.
3. Navigate to the dashboard to manage your blog posts.
4. Click on "Add New Post" to create a new blog post.
5. Click on "Edit" or "Delete" to update or remove your existing posts.
6. Click on "Edit" or "Delete" to update or remove your existing posts.
7. Click on the "Log Out" link to log out of your account.

## Contributions

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them to your branch.
4. Create a pull request describing your changes and submit it to the main repository.

## Credits

This project was Created by Stevi P. Roy.

## Tests

To test the API endpoints, follow the usage instructions and use a REST client like Insomnia or Postman to send requests to the API.

For a more comprehensive test suite, you can create unit tests using a testing framework like Jest or Mocha.

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please feel free to reach out to me via email (Stevi.P.Roy@gmail.com) or visit my [GitHub profile](https://github.com/SteviRoy).

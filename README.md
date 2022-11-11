# 💻 Challenge Solve The X | Backend
This project has been carried out as a result of a challenge proposed by "Solve the X". The project consists of a frontend with Vue and a backend with Node and Express. This repository corresponds to the backend.

## 🦾 Used technology 
- Sqlite3 with Sequelize and Express
- Multer
- Bcrypt + JWT
- Express Validator
- Cors
- Jest and Supertest

# 📃 Entity-Relationship Diagram

I used this diagram as a starting point to create the SQL tables and relationships:

![image](/assets/entity-diagram.png)

# 📋 Pre requirements

0 - You need to have Node, Sqlite3 and Sequelize CLI installed on your computer.

1 - In order to start the project first make a git clone of this project.

2 - Once the project is cloned, you must install the necessary modules with npm:
> npm install

3 - You should rename the "config-example.json" file to "config.json".
Then edit the "develop" and "test" and choose your secret jwt and database name.

4 - Create a ".env" file and add "NODE_ENV = development" and in another row "PORT = 3000". I recommend using port 3000 since that is the one I used.

5 - Database Migration
> sequelize db:migrate

6 - Running the Seeders
> sequelize db:seed:all

7 - The project is ready to start
> npm start

8 - Now you can test the endpoints in Postman or whatever you prefer.

# Endpoints

This project has 4 endpoints:

- Users (/users)
- Books (/books)
- Authors (/authors)
- Orders (/orders)

Each of these endpoints makes use of GET, POST, PUT and DELETE requests. Except for /users/login and /user/signup, the rest of the requests require authentication with JWT.
Apart from this, some requests that modify the database (such as PUT, POST or DELETE) require the JWT to belong to a user with the admin role.

You can see [here](https://documenter.getpostman.com/view/19130008/2s8Yeptsyv#1a9328e4-c617-407e-bba5-8017addba8d1) the collection I used for testing the endpoints.

Made by [Alex Jiménez](https://github.com/radikalex) 😁

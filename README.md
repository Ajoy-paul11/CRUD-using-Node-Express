# CRUD API with Node.js, Express, and MongoDB

This project is a robust CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB. It provides endpoints for managing fruits, vegetables, and employee data.

## Features

- RESTful API design
- CRUD operations for fruits, vegetables, and employees
- MongoDB-Atlas integration for data persistence
- Express.js for efficient routing and middleware support.

### Fruits API

Base URL: `/api/v1/fruits`

- `POST /add`: Add a new fruit
- `GET /get`: Retrieve all fruits
- `PATCH /f/:fruitId`: Update specific fields of a fruit
- `DELETE /:fruitId`: Delete a fruit

### Vegetables API

Base URL: `/api/v1/veg`

- `POST /add`: Add a new vegetable
- `GET /:id`: Retrieve a specific vegetable
- `PUT /:id`: Update entire details of a vegetable

### Employees API

Base URL: `/api/v1/employee`

- `POST /add`: Add a new employee
- `GET /`: Retrieve all employees
- `GET /:id`: Retrieve a specific employee
- `PATCH /:id`: Update specific fields of an employee
- `DELETE /:id`: Delete an employee

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your machine. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ajoy-paul11/CRUD-using-Node-Express.git
   ```
2. Navigate to the project
   ```sh
   cd CRUD-using-Node-Express
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Run development server
   ```sh
   npm run start
   ```

### Usage

You can use tools like Postman or curl to interact with the API.

## Contact

---

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>

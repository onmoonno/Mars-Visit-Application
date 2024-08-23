# MERN Stack Application

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Form Validation](#form-validation)
8. [Folder Structure](#folder-structure)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Project Overview

![Demo](https://github.com/onmoonno/Mars-Visit-Application/blob/main/frontend/public/Mar%20Visit%20App%20Demo.gif)
This project is a web application built using the MERN stack (MongoDB, Express, React, Node.js). The application is designed to handle multi-step form submissions with validation and data persistence. The data is collected from users and stored in a MongoDB database via the backend API. The form includes personal information, travel preferences, and health and safety details.

## Features

- **Multi-step Form:** A step-based form process to collect user information.
- **Form Validation:** Validates form data for required fields, email and phone formats, date consistency, and other custom rules.
- **Data Persistence:** Stores user submissions in a MongoDB database.
- **Responsive Design:** Built with React-Bootstrap for a mobile-friendly UI.
- **API Integration:** Connects the frontend to the backend API for data submission and retrieval.

## Tech Stack

- **Frontend:**
  - React
  - React-Bootstrap
  - React-Router-Dom
  - Material UI
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Validation:**
  - Custom validation logic
  - Built-in HTML5 form validation

## Installation

### Prerequisites

- Node.js & npm installed on your machine.
- MongoDB running locally or on a cloud service.

### Steps

1. **Clone the repository:**

```bash
   git clone https://github.com/onmoonno/Mars-Visit-Application.git

```

2. **Navigate to the project directory:**
3. **Install dependencies for both frontend and backend:**

```bash

npm install
cd frontend
npm install
```

4. **Create a .env file in the root directory and add the following:**

```bash
MONGO_URI=your-mongodb-uri
PORT=your-port
```

5. **Start the development servers:**
   check the scripts in package.json:
   "scripts": {
   "start": " node backend/server.js",
   "server": "npm start --watch backend/server.js",
   "client": "npm start --prefix frontend",
   "dev": "concurrently \"npm run server\" \"npm run client\"",
   "data:import": "node backend/config/dbSeeder.js",
   "data:destroy": "node backend/config/dbSeeder.js -d"}

- Run the App:

```bash
npm run dev
```

- Only run Backend:

```bash
npm run server
```

- Only run Frontend:

```bash
cd frontend
npm start
```

- Import Data:

```bash
npm run data:import
```

- Destroy Data:

```bash
npm run data:destroy
```

## Usage

- Visit http://localhost:3000 to view the frontend.
- Use the multi-step form to enter personal, travel, and health information.
- Submit the form to store the data in the MongoDB database.

## API Endpoints

### POST /api/infos/submit

- Description: Submits user information.

### GET /api/infos

- Description: Retrieves all submitted user information.

## Form Validation

- Required Fields: All stages except "Special Preference" and "Medical Condition"
- Email Format: Must be a valid email address.
- Phone Format: Must be a 10-digit number.
- Date Format: Must be a valid date.
- Date of Birth: Must be earlier then today.
- Return Date: Must be after the departure date.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, please reach out at onvanessano@gmail.com.

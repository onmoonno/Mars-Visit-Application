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

This project is a web application built using the MERN stack (MongoDB, Express, React, Node.js). The application is designed to handle multi-step form submissions with validation and data persistence. The data is collected from users and stored in a MongoDB database via the backend API. The form includes personal information, travel preferences, and health and safety details.

## Features

- **Multi-step Form:** A step-based form process to collect user information.
- **Real-time Form Validation:** Validates form data for required fields, email and phone formats, date consistency, and other custom rules.
- **Data Persistence:** Stores user submissions in a MongoDB database.
- **Responsive Design:** Built with React-Bootstrap for a mobile-friendly UI.
- **API Integration:** Connects the frontend to the backend API for data submission and retrieval.

## Tech Stack

- **Frontend:**
  - React
  - React-Bootstrap
  - Axios
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
   git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

bash
Copy code
cd your-repo-name
Install dependencies for both frontend and backend:

bash
Copy code
npm install
cd client
npm install
Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=your-mongodb-uri
PORT=your-port
Start the development servers:

Backend:

bash
Copy code
npm run server
Frontend:

bash
Copy code
cd client
npm start
Usage
Visit http://localhost:3000 to view the frontend.
Use the multi-step form to enter personal, travel, and health information.
Submit the form to store the data in the MongoDB database.
API Endpoints
POST /api/infos/submit
Description: Submits user information.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "dateOfBirth": "1990-01-01",
  "nationality": "American",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "departureDate": "2024-01-01",
  "returnDate": "2024-01-15",
  "specialRequest": "Vegetarian meal",
  "accommodation": "Hotel",
  "healthy": true,
  "emergencyContact": "Jane Doe",
  "emergencyContactPhone": "0987654321",
  "medicalCondition": "None"
}
GET /api/infos
Description: Retrieves all submitted user information.
Form Validation
Required Fields: All stages.
Email Format: Must be a valid email address.
Phone Format: Must be a 10-digit number.
Date Format: Must be a valid date.
Return Date: Must be after the departure date.
Health Declaration: Required if applicable.
Folder Structure
plaintext
Copy code
root
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── utils
│       └── App.js
├── models
├── routes
├── controllers
├── .env
├── server.js
└── package.json
Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback, please reach out at your-email@example.com.

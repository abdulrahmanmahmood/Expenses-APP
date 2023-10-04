# Expense Tracker App

An expense tracking application built with React, React Router, MUI library, and utilizing a backend JSON file (`db.json`) to store transaction data. The app supports both light and dark modes and is designed to be responsive on various screen sizes.

![App Screenshot 1](https://github.com/abdulrahmanmahmood/Expenses-APP/assets/126025222/9a23dcd1-70bd-4c19-9645-c3c0c1a4f833.png)

![App Screenshot 2](https://github.com/abdulrahmanmahmood/Expenses-APP/assets/126025222/8fe33f75-3f85-42ab-90e8-35431f136720.png)

![App Screenshot 3](https://github.com/abdulrahmanmahmood/Expenses-APP/assets/126025222/3012ed02-ba4f-4ea1-a443-89c87a11864a.png)

![App Screenshot 4](https://github.com/abdulrahmanmahmood/Expenses-APP/assets/126025222/7338d878-cfd7-43b2-a604-e27852666c7d.png)



## Features

- Create transactions by submitting the title and price.
- View all transactions and track total expenses.
- Supports both light and dark modes.
- Responsive design for optimal user experience on different devices.

## Technologies Used

- React
- React Router
- Material-UI (MUI)
- JSON Server (for backend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker-app.git
   cd expense-tracker-app
2. Install dependencies:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start

## Backend Setup

1. Install JSON Server globally (if not installed):
   ```bash
   npm install -g json-server
2. Start JSON Server:
   ```bash
   json-server --watch db.json --port 5000

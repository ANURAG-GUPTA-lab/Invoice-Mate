## Invoice Reminder Web Application

### Overview

The Invoice Reminder Web Application is designed to help users manage their due invoices efficiently. It includes features for viewing, managing, and sending automated reminders for unpaid invoices. The application consists of a frontend built with React and a backend powered by Node.js and Express, connected to a MongoDB database.

### Features

- **User Authentication**: Login with Google
- **Invoice Management**: View a list of due invoices
- **Automated Reminders**: Trigger automated reminders for due invoices
- **Responsive Design**: Ensures usability across different devices and screen sizes

### Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Passport.js
- **Styling**: CSS with responsive design principles

### Project Structure

```
invoice-reminder/
├── backend/
│   ├── config/
│   │   └── passport.js
│   ├── models/
│   │   └── Invoice.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── invoices.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js
│   │   │   ├── DueInvoices.js
│   │   │   ├── LoadingIcon.js
│   │   │   └── Modal.js
│   │   ├── styles/
│   │   │   ├── home.css
│   │   │   ├── invoices.css
│   │   │   ├── loadingIcon.css
│   │   │   └── modal.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── .env
├── .gitignore
├── README.md
└── package.json
```

### Backend

- **server.js**: Main server file to configure and run the Express server.
- **config/passport.js**: Configuration for Passport.js authentication.
- **models/Invoice.js**: Mongoose schema for invoices.
- **routes/auth.js**: Routes for user authentication.
- **routes/invoices.js**: Routes for managing invoices.

### Frontend

- **components/Home.js**: Home page with links to login and view invoices.
- **components/DueInvoices.js**: Page displaying the list of due invoices with trigger automation buttons.
- **components/LoadingIcon.js**: Loading icon component.
- **components/Modal.js**: Modal component for displaying pop-up messages.
- **styles/home.css**: CSS for the Home component.
- **styles/invoices.css**: CSS for the DueInvoices component.
- **styles/loadingIcon.css**: CSS for the LoadingIcon component.
- **styles/modal.css**: CSS for the Modal component.
- **App.js**: Main React component that sets up routing.
- **index.js**: Entry point for the React application.

### Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/invoice-reminder.git
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```sh
     cd invoice-reminder/backend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Create a `.env` file and add your environment variables:
     ```sh
     MONGO_URI=your_mongodb_uri
     SESSION_SECRET=your_session_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```
   - Start the backend server:
     ```sh
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```sh
     cd ../frontend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Create a `.env` file and add your environment variables:
     ```sh
     REACT_APP_API_URL=http://localhost:5000/api
     ```
   - Start the frontend development server:
     ```sh
     npm start
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3001` to view the frontend.
   - Ensure the backend server is running on `http://localhost:5000`.

### Usage

- **Login**: Use the "Login with Google" button to authenticate.
- **View Invoices**: Navigate to the "View Invoices" page to see a list of due invoices.
- **Trigger Automation**: Click the "Trigger Automation" button next to an invoice to send a reminder.

### Contributing

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes and commit them (`git commit -m 'Add new feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a Pull Request.

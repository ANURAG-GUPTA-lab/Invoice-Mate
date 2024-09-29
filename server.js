const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoices');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    ssl: true,
    tlsAllowInvalidCertificates: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(cors());

// Express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/invoices', invoiceRoutes);

app.get('/', (req, res) => res.send('Home Page'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

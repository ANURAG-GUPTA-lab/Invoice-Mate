// scripts/seedInvoices.js

const mongoose = require('mongoose');
const Invoice = require('../models/Invoice'); // Adjust the path according to your project structure
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    ssl: true,
    tlsAllowInvalidCertificates: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const sampleInvoices = [
    {
        description: 'Phone Bill',
        amount: 50.00,
        dueDate: new Date('2024-07-01'),
        recipient: 'Phone Company',
        userId: 'user123'
    },
    {
        description: 'Electricity Bill',
        amount: 100.00,
        dueDate: new Date('2024-07-01'),
        recipient: 'Electric Company',
        userId: 'user123'
    },
    {
        description: 'Water Bill',
        amount: 30.00,
        dueDate: new Date('2024-07-01'),
        recipient: 'Water Company',
        userId: 'user123'
    },
    {
        description: 'Insurance Bill',
        amount: 200.00,
        dueDate: new Date('2024-07-01'),
        recipient: 'Insurance Company',
        userId: 'user123'
    },
    {
        description: 'Land Bill',
        amount: 500.00,
        dueDate: new Date('2024-07-01'),
        recipient: 'Land Department',
        userId: 'user123'
    }
];

const seedInvoices = async () => {
    try {
        await Invoice.deleteMany({});
        await Invoice.insertMany(sampleInvoices);
        console.log('Sample invoices added.');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding invoices:', error);
    }
};

seedInvoices();

// invoiceController.js
const axios = require('axios');

// Function to check for past-due invoices
const checkPastDueInvoices = async () => {
    // Example invoice data
    const invoices = [
        { id: 1, dueDate: '2023-06-15', amount: 100, recipient: 'user@example.com' },
        { id: 2, dueDate: '2023-06-10', amount: 150, recipient: 'user2@example.com' }
    ];

    const currentDate = new Date();

    invoices.forEach(async (invoice) => {
        const dueDate = new Date(invoice.dueDate);
        if (currentDate > dueDate) {
            // Invoice is past due, trigger Zapier webhook
            try {
                const response = await axios.post('https://hooks.zapier.com/hooks/catch/19220564/2b2idug/', invoice);
                console.log(`Triggered Zapier webhook for invoice ${invoice.id}:`, response.data);
            } catch (error) {
                console.error(`Error triggering Zapier webhook for invoice ${invoice.id}:`, error);
            }
        }
    });
};

module.exports = { checkPastDueInvoices };

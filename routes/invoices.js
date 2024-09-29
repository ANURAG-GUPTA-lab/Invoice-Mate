const express = require('express');
const router = express.Router();
const axios = require('axios');

// Dummy data for invoices
const invoices = [
    { id: 1, description: 'Phone Bill', amount: 100, dueDate: '2024-07-01' },
    { id: 2, description: 'Electricity Bill', amount: 150, dueDate: '2024-07-05' },
    { id: 3, description: 'Water Bill', amount: 80, dueDate: '2024-07-10' },
    { id: 4, description: 'Insurance Bill', amount: 200, dueDate: '2024-07-15' },
    { id: 5, description: 'Land Bill', amount: 500, dueDate: '2024-07-20' },
];

router.get('/due-invoices', (req, res) => {
    res.json(invoices);
});

router.post('/trigger-zapier', async (req, res) => {
    const { invoiceId } = req.body;

    // Replace with your Zapier webhook URL
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    // Find the invoice by ID
    const invoice = invoices.find(inv => inv.id === invoiceId);

    if (!invoice) {
        return res.status(404).json({ error: 'Invoice not found' });
    }

    try {
        // Send the invoice data to the Zapier webhook
        await axios.post(zapierWebhookUrl, { invoice });

        res.status(200).json({ message: 'Reminder triggered successfully' });
    } catch (error) {
        console.error('Error triggering Zapier:', error);
        res.status(500).json({ error: 'Failed to trigger reminder' });
    }
});

module.exports = router;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/invoices.css';

const Invoices = () => {
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const invoices = [
    {
      id: 1,
      description: 'Phone Bill',
      amount: 100,
      dueDate: '2024-07-01',
    },
    {
      id: 2,
      description: 'Electricity Bill',
      amount: 150,
      dueDate: '2024-07-05',
    },
    {
      id: 3,
      description: 'Water Bill',
      amount: 80,
      dueDate: '2024-07-10',
    },
    {
      id: 4,
      description: 'Insurance Bill',
      amount: 200,
      dueDate: '2024-07-15',
    },
    {
      id: 5,
      description: 'Land Bill',
      amount: 500,
      dueDate: '2024-07-20',
    },
  ];

  const triggerZapier = async (invoiceId) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/invoices/trigger-zapier`, { invoiceId });
      setModalMessage('Automation triggered successfully');
    } catch (error) {
      console.error('Error triggering Zapier:', error);
      setModalMessage('Failed to trigger automation');
    } finally {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className="invoices-container">
      <h2>Due Invoices</h2>
      <ul className="invoices-list">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="invoice-item">
            <strong>{invoice.description}</strong><br />
            Amount: ${invoice.amount}<br />
            Due Date: {new Date(invoice.dueDate).toLocaleDateString()}<br />
            <button className="trigger-btn" onClick={() => triggerZapier(invoice.id)}>Trigger Automation</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;

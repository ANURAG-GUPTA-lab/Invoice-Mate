// src/component/Toast.js
import React from 'react';
import '../styles/toast.css'; // Updated path

const Toast = ({ message, onClose }) => {
    return (
        <div className="toast">
            {message}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Toast;

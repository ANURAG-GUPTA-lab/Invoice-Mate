import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import DueInvoices from './component/DueInvoices';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/due-invoices" element={<DueInvoices />} />
    </Routes>
  );
};

export default App;










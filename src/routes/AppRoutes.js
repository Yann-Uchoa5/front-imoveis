import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro';
import Login from '../pages/Login/Login';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        {/* Adicione uma rota padrão para redirecionar para /cadastro */}
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro';
import Login from '../pages/Login/Login';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/CadastroUserPage/Cadastro";
import CadastroImovel from "../pages/CadastroImovelPage/CadastroImovel";
>>>>>>> 3a7b91797ba172c7d58feb9ec284b1cf9410b330

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
=======
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastrar_imovel" element={<CadastroImovel />} />
        {/* Adicione uma rota padrão para redirecionar para /cadastro */}
        <Route path="/" element={<Cadastro />} />
>>>>>>> 3a7b91797ba172c7d58feb9ec284b1cf9410b330
      </Routes>
    </Router>
  );
};

export default AppRoutes;

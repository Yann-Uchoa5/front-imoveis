import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/CadastroUserPage/Cadastro";
import CadastroImovel from "../pages/CadastroImovelPage/CadastroImovel";
import Perfil from "../pages/Perfil/Perfil";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar_imovel" element={<CadastroImovel />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

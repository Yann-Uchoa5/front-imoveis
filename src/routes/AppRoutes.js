import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/CadastroUserPage/Cadastro";
import CadastroImovel from "../pages/CadastroImovelPage/CadastroImovel";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastrar_imovel" element={<CadastroImovel />} />
        {/* Adicione uma rota padrão para redirecionar para /cadastro */}
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

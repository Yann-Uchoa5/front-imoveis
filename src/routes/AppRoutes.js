import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/CadastroUserPage/Cadastro";
import CadastroImovel from "../pages/CadastroImovelPage/CadastroImovel";
import Perfil from "../pages/Perfil/Perfil";
import Home from "../pages/Home/Home";
import ListaInteresses from "../pages/ListaInteressesPage/ListaInteresses"
import RecoverPassword from "../pages/RecoverPassword/RecoverPassword";
import ListarImoveis from "../pages/ListarImovel/ListarImoveis";
import Page404 from "../pages/404/Page404";
import PrivateRoute from "../components/PrivateRoute"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route
          path="/cadastrar_imovel"
          element={
            <PrivateRoute>
              <CadastroImovel />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/ListaInteresses"
          element={
            <PrivateRoute>
              <ListaInteresses />
            </PrivateRoute>
          }
        />
        <Route
          path="/listar_imoveis"
          element={
            <PrivateRoute>
              <ListarImoveis />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

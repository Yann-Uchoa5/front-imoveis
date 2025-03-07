import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Cadastro.css";
import hotel from "../../assets/images/hotel.png";

const URL = process.env.REACT_APP_API_URL;

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      const response = await axios.post(`${URL}/usuarios/register`, {
        nome,
        email,
        senha,
        telefone,
      });

      if (response.status === 200 || response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigate("/home")
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao cadastrar usuário.");
      }
      console.error("Erro ao salvar usuário:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="cadastro-wrapper">
        <img src={hotel} alt="Hotel" className="imagem-lado" />
        <div className="cadastro-container">
          <h1>Insira seus dados para Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <FormInput
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <FormInput
                type="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Digite seu telefone"
                required
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <FormInput
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirmar senha</label>
              <FormInput
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Confirme sua senha"
                required
              />
            </div>
            <Button onClick={handleSubmit}>Cadastrar</Button>
            <Link to="/" className="login-button">
              Já possui uma conta? Faça o login!
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

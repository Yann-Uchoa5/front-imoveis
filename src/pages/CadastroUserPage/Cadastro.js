import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Cadastro.css";
import hotel from "../../assets/images/hotel.png"; // Importe a imagem

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", {
      nome,
      sobrenome,
      email,
      senha,
      confirmarSenha,
    });
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
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
              <label>Sobrenome</label>
              <FormInput
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                placeholder="Digite seu sobrenome"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

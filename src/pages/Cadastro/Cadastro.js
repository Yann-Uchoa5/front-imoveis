import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FormInput from '../../components/FormInput/FormInput';
import './Cadastro.css';
import hotel from '../../assets/images/hotel.png'; // Importe a imagem

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
  };

  return (
    <div>
      <Navbar />
      <div className="cadastro-wrapper"> {/* Novo container para organizar o layout */}
        <img src={hotel} alt="Hotel" className="imagem-lado" /> {/* Adicione a imagem aqui */}
        <div className="cadastro-container">
          <h1>Insira seus dados para Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <FormInput
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Sobrenome</label>
              <FormInput
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <FormInput
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <FormInput
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirmar senha</label>
              <FormInput
                type="password"
                name="confirmarSenha"
                placeholder="Confirme sua senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="cadastro-button">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
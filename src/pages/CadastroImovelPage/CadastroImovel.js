import MainNavbar from "../../components/MainNavbar/MainNavbar";
import WomanBanner from "../../components/WomanBanner/WomanBanner";
import Footer from "../../components/Footer/Footer";

import FormInput from "../../components/FormInput/FormInput";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import Button from "../../components/Button/Button";
import "./CadastroImovel.css";
import { useState } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const tipoImovel = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "kitnet", label: "Kitnet" },
  { value: "duplex", label: "Duplex" },
];

const tipoNegocio = [
  { value: "venda", label: "Venda" },
  { value: "aluguel", label: "Locação" },
];

const Cadastro_imovel = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [metrosQuadrados, setMetrosQuadrados] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [selectedNegocio, setSelectedNegocio] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTipo?.value || !selectedNegocio?.value) {
      alert("Selecione o tipo de imóvel e o tipo de negócio!");
      return;
    }

    const data = {
      titulo,
      descricao,
      preco: Number(preco),
      tipo: selectedTipo.value,
      tipo_negocio: selectedNegocio.value,
      status: "disponivel",
      area: Number(metrosQuadrados),
      cidade,
      cep: cep.replace(/\D/g, ''),
      estado: estado.toUpperCase(),
      endereco
    };

    try {
      const response = await axios.post(
        `${URL}/imoveis/create`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
      alert("Imóvel cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro detalhado:", error.response?.data);
      alert(`Erro ao cadastrar: ${error.response?.data?.detail || "Verifique os dados"}`);
    }
  };

  return (
    <div className="imovel_container">
      <MainNavbar />
      <div className="imovel_banner">
        <WomanBanner />
      </div>
      <form onSubmit={handleSubmit}>
        <section className="imovel_cadastro">
          <h2>Insira os dados para anunciar o seu imóvel</h2>

          <div className="imovel_formulario">
            <h3>Informações Básicas</h3>

            <div className="form-group">
              <label>Título do Anúncio*</label>
              <FormInput
                type="text"
                placeholder="Ex: Apartamento Moderno no Centro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="form-group double-width">
              <label>Descrição Detalhada*</label>
              <textarea
                className="form-input"
                placeholder="Descreva características, localização e diferenciais"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Preço (R$)*</label>
              <FormInput
                type="number"
                placeholder="Valor do imóvel"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Tipo de Imóvel*</label>
              <CustomSelect
                options={tipoImovel}
                value={selectedTipo}
                onChange={setSelectedTipo}
                placeholder="Selecione..."
                isRequired
              />
            </div>

            <div className="form-group">
              <label>Negociação*</label>
              <CustomSelect
                options={tipoNegocio}
                value={selectedNegocio}
                onChange={setSelectedNegocio}
                placeholder="Venda ou Locação"
                isRequired
              />
            </div>

            <div className="form-group">
              <label>Área (m²)*</label>
              <FormInput
                type="number"
                placeholder="Metragem total"
                value={metrosQuadrados}
                onChange={(e) => setMetrosQuadrados(e.target.value)}
                min="0"
                required
              />
            </div>
          </div>

          <div className="imovel_formulario-localizacao">
            <h3>Localização</h3>

            <div className="form-group">
              <label>Endereço Completo*</label>
              <FormInput
                type="text"
                placeholder="Ex: Rua Principal, 123 - Bairro"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>CEP*</label>
              <FormInput
                type="text"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  const formatted = value.replace(/(\d{5})(\d{3})/, '$1-$2');
                  setCep(formatted.substring(0, 9));
                }}
                required
              />
            </div>

            <div className="form-group">
              <label>Cidade*</label>
              <FormInput
                type="text"
                placeholder="Ex: São Paulo"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Estado (UF)*</label>
              <FormInput
                type="text"
                placeholder="Ex: SP"
                value={estado}
                onChange={(e) => setEstado(e.target.value.toUpperCase())}
                maxLength="2"
                required
              />
            </div>
          </div>

          <div className="formulario_botao">
            <Button type="submit">Publicar Anúncio</Button>
          </div>

          <div>

          </div>
        </section>
      </form>
      <h2 className="imovel_ajuda">
        Precisa de <a href="#ajuda">AJUDA?</a>
      </h2>
      <Footer />
    </div>
  );
};

export default Cadastro_imovel;
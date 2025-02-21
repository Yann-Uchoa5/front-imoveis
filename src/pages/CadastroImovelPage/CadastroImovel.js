import MainNavbar from "../../components/MainNavbar/MainNavbar";
import WomanBanner from "../../components/WomanBanner/WomanBanner";
import Footer from "../../components/Footer/Footer";
import FormInput from "../../components/FormInput/FormInput";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import "./CadastroImovel.css";
import { useState } from "react";

const tipoImovel = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "kitnet", label: "Kitnet" },
  { value: "duplex", label: "Duplex" },
];

const tipoNegocio = [
  { value: "compra", label: "Compra" },
  { value: "locacao", label: "Locação" },
];

const Cadastro_imovel = () => {
  const [tipo, setTipo] = useState("");
  const [forma, setForma] = useState("");
  const [fotos, setFotos] = useState("");
  const [linkWhatsapp, setLinkWhatsapp] = useState("");
  const [linkEmail, setLinkEmail] = useState("");
  const [nQuartos, setNQuartos] = useState(0);
  const [nBanheiros, setNBanheiros] = useState(0);
  const [metrosQuadrados, setMetrosQuadrados] = useState(0);

  return (
    <div className="imovel_container">
      <MainNavbar />
      <div className="imovel_banner">
        <WomanBanner />
      </div>
      <section className="imovel_cadastro">
        <h2>Insira os dados para anunciar o seu imóvel</h2>
        <div className="imovel_formulario">
          {/* Primeira linha: dois campos nas duas primeiras colunas */}
          <div className="form-group ">
            <label>Tipo de imóvel</label>
            <CustomSelect
              options={tipoImovel}
              placeholder="Selecione o tipo de imóvel..."
            />
          </div>
          <div className="form-group double-width">
            <label>Forma de negociação</label>
            <CustomSelect
              options={tipoNegocio}
              placeholder="Selecione o tipo de negócio..."
            />
          </div>

          {/* Segunda linha: três campos (um em cada coluna) */}
          <div className="form-group">
            <label>Fotos</label>
            <FormInput
              type="text"
              placeholder="Faça o upload das fotos"
              required
            />
          </div>
          <div className="form-group">
            <label>Link para o Whatsapp</label>
            <FormInput
              type="text"
              placeholder="Digite o link para o seu Whatsapp"
              required
            />
          </div>
          <div className="form-group">
            <label>Link para o Email</label>
            <FormInput
              type="email"
              placeholder="Digite o link para o seu Email"
              required
            />
          </div>

          {/* Terceira linha: três campos (um em cada coluna) */}
          <div className="form-group">
            <label>Número de quartos</label>
            <FormInput
              type="number"
              placeholder="Digite o número de quartos"
              required
            />
          </div>
          <div className="form-group">
            <label>Número de banheiros</label>
            <FormInput
              type="number"
              placeholder="Digite o número de banheiros"
              required
            />
          </div>
          <div className="form-group">
            <label>Metros Quadrados</label>
            <FormInput
              type="number"
              placeholder="Digite a metragem do imóvel"
              required
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cadastro_imovel;

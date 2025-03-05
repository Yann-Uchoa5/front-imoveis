import React, { useState, useEffect } from "react";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import "./ListarImoveis.css";

const ListarImoveis = () => {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    const dadosImoveis = [
      { id: 1, cidade: "São Paulo", estado: "SP", negocio: "venda", status: "ativo" },
      { id: 2, cidade: "Rio de Janeiro", estado: "RJ", negocio: "locacao", status: "inativo" },
      { id: 3, cidade: "Belo Horizonte", estado: "MG", negocio: "venda", status: "ativo" },
      { id: 4, cidade: "São Paulo", estado: "SP", negocio: "venda", status: "ativo" },
      { id: 5, cidade: "Rio de Janeiro", estado: "RJ", negocio: "locacao", status: "inativo" },
      { id: 6, cidade: "Belo Horizonte", estado: "MG", negocio: "venda", status: "ativo" },
      { id: 7, cidade: "Belo Horizonte", estado: "MG", negocio: "venda", status: "ativo" },
    
    ];
    setImoveis(dadosImoveis); // Atualizando o estado com os imóveis
  }, []);

  return (
    <div className="page-container">
     
      <MainNavbar />

      <div className="containerzin">
        <h2 className="anuncio">Veja seus imóveis anunciados!</h2>
        <table className="imoveis-table">
          <thead>
            <tr>
              <th>Localização</th>
              <th>Negócio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {imoveis.map((imovel) => (
              <tr key={imovel.id}>
                <td>{`${imovel.cidade}, ${imovel.estado}`}</td>
                <td>{imovel.negocio === "venda" ? "Venda" : "Locação"}</td>
                <td>
                  <div className="status-container">
                    <span className={`ativo ${imovel.status === "ativo" ? "" : "inativo"}`}>
                      {imovel.status === "ativo" ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="paragraph">
          Precisa de <strong>Ajuda?</strong>
        </p>
      
      <Footer />
    </div>
  );
};

export default ListarImoveis;

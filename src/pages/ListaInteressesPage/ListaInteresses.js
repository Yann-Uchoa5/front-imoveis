import { useState } from "react";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import "./ListaInteresses.css";
import { FaPhone } from "react-icons/fa";

const ListaInteresses = () => {
  const [menuAberto, setMenuAberto] = useState(null);

  const interesses = [
    {
      nome: "João Sousa",
      email: "example@email.com",
      telefone: "5585987654321",
      idImovel: 1,
    },
    {
      nome: "João Sousa",
      email: "example@email.com",
      telefone: "5585987654321",
      idImovel: 2,
    },
    {
      nome: "João Sousa",
      email: "example@email.com",
      telefone: "5585987654321",
      idImovel: 3,
    },
    { nome: "João Sousa", email: "", telefone: "5585987654321", idImovel: 4 },
    { nome: "João Sousa", email: "", telefone: "5585987654321", idImovel: 5 },
    { nome: "João Sousa", email: "", telefone: "5585987654321", idImovel: 6 },
    { nome: "João Sousa", email: "", telefone: "5585987654321", idImovel: 7 },
    { nome: "João Sousa", email: "", telefone: "5585987654321", idImovel: 8 },
  ];

  const toggleMenu = (index) => {
    setMenuAberto(menuAberto === index ? null : index);
  };

  return (
    <>
      <MainNavbar />
      <br />
      <div className="container">
        <h2>Veja a lista de interesses</h2>
        <table className="tabela-interesses">
          <thead>
            <tr>
              <th>Nome do cliente</th>
              <th>Email do cliente</th>
              <th>Identificação do imóvel</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {interesses.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td className={item.email ? "email-normal" : "email-escuro"}>
                  {item.email ? (
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  ) : (
                    "example@email.com"
                  )}
                </td>
                <td>{item.idImovel}</td>
                <td className="acoes-container">
                  <button
                    className="btn-acoes"
                    onClick={() => toggleMenu(index)}
                  >
                    ⋮
                  </button>
                  {menuAberto === index && (
                    <div className="dropdown-menu">
                      <a
                        href={`https://wa.me/${item.telefone}`}
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaPhone /> Entrar em contato
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="paragraph">
          Precisa de <strong>Ajuda?</strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ListaInteresses;

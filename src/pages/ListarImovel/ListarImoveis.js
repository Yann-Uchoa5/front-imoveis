import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import ActionMenu from "../../components/ActionMenu/ActionMenu";
import "./ListarImoveis.css";
import ImovelEditModal from "../../components/Modal/ImovelEditModal";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

const URL = process.env.REACT_APP_API_URL;

const ListarImoveis = () => {
  const [imoveis, setImoveis] = useState([]);
  const [imovelToEdit, setImovelToEdit] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    tipo: "",
    tipo_negocio: "",
    area: "",
    preco: "",
    status: ""
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    message: "",
    onConfirm: null,
  });

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await axios.get(`${URL}/imoveis/list`);
        if (response.data.status === "success") {
          setImoveis(response.data.data);
        }
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    };

    fetchImoveis();
  }, []);

  const handleEdit = (imovel) => {
    setImovelToEdit(imovel);
    setFormData({
      titulo: imovel.titulo,
      endereco: imovel.endereco,
      cidade: imovel.cidade,
      estado: imovel.estado,
      cep: imovel.cep,
      tipo: imovel.tipo,
      tipo_negocio: imovel.tipo_negocio,
      area: imovel.area,
      preco: imovel.preco,
      status: imovel.status
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${URL}/imoveis/update/${imovelToEdit.id}`,
        formData
      );
      console.log("Imóvel atualizado:", response.data);
      setImoveis((prev) =>
        prev.map((item) =>
          item.id === imovelToEdit.id ? { ...item, ...formData } : item
        )
      );
      setImovelToEdit(null);
    } catch (error) {
      console.error("Erro ao atualizar imóvel:", error);
    }
  };

  const handleDelete = (imovel) => {
    setConfirmDialog({
      isOpen: true,
      message: "Tem certeza que deseja excluir este imóvel?",
      onConfirm: async () => {
        try {
          await axios.delete(`${URL}/imoveis/${imovel.id}`);
          setImoveis((prevImoveis) =>
            prevImoveis.filter((item) => item.id !== imovel.id)
          );
          console.log("Imóvel excluído com sucesso");
        } catch (error) {
          console.error("Erro ao excluir imóvel:", error);
        } finally {
          setConfirmDialog({ ...confirmDialog, isOpen: false });
        }
      },
    });
  };

  const closeModal = () => {
    setImovelToEdit(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page-container">
      <MainNavbar />

      <div className="containerzin">
      
        <h2 className="anuncio">Veja os imóveis anunciados!</h2>
        <table className="imoveis-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Endereço</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>CEP</th>
              <th>Tipo</th>
              <th>Negócio</th>
              <th>Área</th>
              <th>Preço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {imoveis.map((imovel) => (
              <tr key={imovel.id}>
                <td>{imovel.titulo}</td>
                <td>{imovel.endereco}</td>
                <td>{imovel.cidade}</td>
                <td>{imovel.estado}</td>
                <td>{imovel.cep}</td>
                <td>{imovel.tipo}</td>
                <td>{imovel.tipo_negocio === "venda" ? "Venda" : "Locação"}</td>
                <td>{imovel.area}</td>
                <td>{imovel.preco}</td>
                <td>
                  <div className="status-container">
                    <span
                      className={
                        imovel.status === "disponivel"
                          ? "status disponivel"
                          : imovel.status === "vendido"
                            ? "status vendido"
                            : imovel.status === "alugado"
                              ? "status alugado"
                              : "status"
                      }
                    >
                      {imovel.status === "disponivel"
                        ? "Disponível"
                        : imovel.status === "vendido"
                          ? "Vendido"
                          : imovel.status === "alugado"
                            ? "Alugado"
                            : imovel.status}
                    </span>
                  </div>

                </td>
                <td>
                  <ActionMenu
                    imovel={imovel}
                    onEdit={handleEdit}
                    onDelete={handleDelete} />
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

      {imovelToEdit && (
        <ImovelEditModal
          imovel={imovelToEdit}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onClose={closeModal}
        />
      )}

      {confirmDialog.isOpen && (
        <ConfirmDialog
          message={confirmDialog.message}
          onConfirm={confirmDialog.onConfirm}
          onCancel={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
      )}

    </div>
  );
};

export default ListarImoveis;

import React from "react";
import "./ImovelEditModal.css";

const ImovelEditModal = ({ imovel, formData, onInputChange, onSubmit, onClose }) => {
    if (!imovel) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Editar Imóvel</h3>
                <form onSubmit={onSubmit}>
                    <label>
                        Título:
                        <input
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Endereço:
                        <input
                            type="text"
                            name="endereco"
                            value={formData.endereco}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Cidade:
                        <input
                            type="text"
                            name="cidade"
                            value={formData.cidade}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Estado:
                        <input
                            type="text"
                            name="estado"
                            value={formData.estado}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        CEP:
                        <input
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="tipo"
                            value={formData.tipo}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Negócio:
                        <select
                            name="tipo_negocio"
                            value={formData.tipo_negocio}
                            onChange={onInputChange}
                        >
                            <option value="venda">Venda</option>
                            <option value="aluguel">Locação</option>
                        </select>
                    </label>
                    <label>
                        Área:
                        <input
                            type="number"
                            name="area"
                            value={formData.area}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Preço:
                        <input
                            type="number"
                            name="preco"
                            value={formData.preco}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            name="status"
                            value={formData.status}
                            onChange={onInputChange}
                        >
                            <option value="disponivel">Disponível</option>
                            <option value="vendido">Vendido</option>
                            <option value="alugado">Alugado</option>
                        </select>
                    </label>
                    <div className="modal-buttons">
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ImovelEditModal;

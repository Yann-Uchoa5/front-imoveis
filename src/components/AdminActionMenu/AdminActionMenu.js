import React, { useState } from "react";
import "./AdminActionMenu.css";

const AdminActionMenu = ({ imovel, onEdit, onDelete }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div
            className="action-menu-container"
            onMouseEnter={() => setMenuAberto(true)}
            onMouseLeave={() => setMenuAberto(false)}
        >
            <button className="action-menu-button">
                <i className="fas fa-ellipsis-v"></i>
            </button>
            {menuAberto && (
                <div className="action-menu">
                    <button onClick={() => onEdit(imovel)}>Editar</button>
                    <button onClick={() => onDelete(imovel)}>Excluir</button>
                </div>
            )}
        </div>
    );
};

export default AdminActionMenu;

import React, { useState } from "react";
import "./CustomerActionMenu.css";

const CustomerActionMenu = ({ email, whatsapp, onEmail, onWhatsapp }) => {
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
                    <button onClick={() => onEmail(email)}>Email</button>
                    <button onClick={() => onWhatsapp(whatsapp)}>Whatsapp</button>
                </div>
            )}
        </div>
    );
};

export default CustomerActionMenu;

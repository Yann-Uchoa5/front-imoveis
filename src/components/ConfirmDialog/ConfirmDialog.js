import React from "react";
import "./ConfirmDialog.css";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirm-dialog-overlay">
            <div className="confirm-dialog-content">
                <p>{message}</p>
                <div className="confirm-dialog-buttons">
                    <button onClick={onConfirm} className="confirm">
                        Confirmar
                    </button>
                    <button onClick={onCancel} className="cancel">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;

import React from 'react';
import '../Modals/Modals.css';

const Modal = ({ show, onClose, imgSrc }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imgSrc} alt="Aperçu" className="modal-image" />
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Modal;

/*Modal component*/
import React from 'react';
import '../modal/Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
    <div className="modal">
        <div className="modal__container">
            <button className="modal__container__close" onClick={onClose}>
                &times;
            </button>
            <div className="modal__container__content">{children}</div>
        </div>
    </div>
    );
};

export default Modal;
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../components/context';

const Modal = () => {
    /* Destructuring the isModalOpen and closeModal from the useGlobalContext hook. */
    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        /* A ternary operator. If isModalOpen is true, then it will add the class show-modal to the
        div. If it is false, then it will not add the class show-modal to the div. */
        // ALT: isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
            <div className="modal-container">
                <h3>modal content</h3>

                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
};

export default Modal;

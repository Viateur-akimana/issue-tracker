import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, modalOpen, setModalOpen }) => {
    if (!modalOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black p-5 rounded-lg max-w-md w-full shadow-xl">
                {children}
                <button
                    className="absolute top-3 right-3 text-lg bg-black font-semibold text-gray-800"
                    onClick={() => setModalOpen(false)}
                >
                    &times;
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyles = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={modalStyles}>
      <div
        className="fixed inset-0 bg-gray-900 opacity-70"
        onClick={onClose}
      ></div>
      <div className="relative z-20 bg-white p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

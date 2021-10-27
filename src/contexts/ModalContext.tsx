import React, { createContext, useState } from 'react';

type ModalContextType = {
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

export const ModalContext = createContext({} as ModalContextType);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

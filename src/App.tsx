import React from 'react';
import { Modal } from './components/Modal';

import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';

import { Routes } from './routes';

export const App: React.FC = () => (
  <AuthProvider>
    <ModalProvider>
      <Routes />
      <Modal />
    </ModalProvider>
  </AuthProvider>
);

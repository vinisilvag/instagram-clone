import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes';

export const App: React.FC = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import App from './App';
import { AuthProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { ProductProvider } from './context/shop.context';
import { CartProvider } from './context/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <ProductProvider>
      <CartProvider>
       <App />
      </CartProvider>
    </ProductProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


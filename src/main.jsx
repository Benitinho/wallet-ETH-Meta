import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './components/home';
import './index.css';
import Products from './components/products';
import Balances from './components/balances';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
         <Route path='/products' element={<Products />}></Route>
         <Route path='/balances' element={<Balances />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)

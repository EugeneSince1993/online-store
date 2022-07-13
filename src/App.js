import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Product } from './pages';

function App() {

  return (
    <>
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/devices/:id" element={<Product />} exact />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

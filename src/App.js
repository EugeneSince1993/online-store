import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';

import { Home } from './pages';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

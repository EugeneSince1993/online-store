import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home } from './pages';
import Container from "react-bootstrap/Container";

function App() {

  return (
    <>
      <Header />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

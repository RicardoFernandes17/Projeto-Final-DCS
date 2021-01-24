import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SugRoutes from '../components/SugRoutes';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SugRoutesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Função para extrair as informações
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SugRoutes />
      <Footer />
    </>
  );
};

export default SugRoutesPage;

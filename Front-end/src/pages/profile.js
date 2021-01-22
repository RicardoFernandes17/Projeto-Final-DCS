import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { Ricardo } from "../components/Profile/data";
import ScrollToTop from "../components/ScrollToTop";

const ProfilePage = () => {
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
      <Profile {...Ricardo} />
      <Footer />
    </>
  );
};

export default ProfilePage;

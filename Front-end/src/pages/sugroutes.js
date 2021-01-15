import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {RoutesContainer} from '../components/SugRoutes/SugRoutesElements'
import SugRoutes from '../components/SugRoutes'
import Footer from '../components/Footer'
import { saoPedro, saoPedro2 } from '../components/SugRoutes/data';
import ScrollToTop from '../components/ScrollToTop'



const SugRoutesPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    //Função para extrair as informações
    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <RoutesContainer id='places'>
                <SugRoutes {...saoPedro}/>
                <SugRoutes {...saoPedro2}/>
            </RoutesContainer>
            <Footer />
        </>
    )
}

export default SugRoutesPage

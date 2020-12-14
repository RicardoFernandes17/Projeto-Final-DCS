import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {RoutesContainer} from '../components/RoutesP/RoutesElements'
import RoutesP from '../components/RoutesP'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'


const RoutesPage = () => {
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
            <RoutesContainer>
                <RoutesP></RoutesP>
            </RoutesContainer>
            <Footer />
        </>
    )
}

export default RoutesPage

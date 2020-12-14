import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {PlacesContainer} from '../components/Places/PlacesElements'
import Places from '../components/Places'
import Footer from '../components/Footer'
import { saoPedro } from '../components/Places/data';
import ScrollToTop from '../components/ScrollToTop'



const PlacesPage = () => {
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
            <PlacesContainer id='places'>
                <Places {...saoPedro}/>
                <Places {...saoPedro}/>
            </PlacesContainer>
            <Footer />
        </>
    )
}

export default PlacesPage

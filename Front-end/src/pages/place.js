import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {PlaceContainer} from '../components/Places/PlacesElements'
import Places from '../components/Places'
import Footer from '../components/Footer'
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
            <PlaceContainer id='places'>
                <Places {...saoPedro}/>
                <Places {...saoPedro}/>
            </PlaceContainer>
            <Footer />
        </>
    )
}

export default PlacesPage

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { homeObjBraga, homeObjPorto , homeObjLisboa} from '../components/InfoSection/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjBraga}/>
            <InfoSection {...homeObjPorto}/>
            <InfoSection {...homeObjLisboa}/>
            <Footer />
        </>
    )
}

export default Home

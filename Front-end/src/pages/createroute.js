import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CreateRoute from '../components/CreateRoute'
import Footer from '../components/Footer'

const CreateRoutePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <CreateRoute />
            <Footer/>
        </>
    )
}

export default CreateRoutePage

import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink,NavLinksR, NavRed} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 110){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavRed>RUBY</NavRed>TRAILS
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="braga" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Braga</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="porto" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Porto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="lisboa" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Lisboa</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Places" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Locais</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Routes">Rotas</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinksR to="/signup">Sign Up</NavLinksR>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

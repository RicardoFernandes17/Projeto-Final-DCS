import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksR,
  NavRed,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import Cookies from "js-cookie";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 110) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logOut = () => {
    Cookies.remove("token");
  };
  
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
              <NavLinks
                to="braga"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Braga
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="porto"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Porto
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="lisboa"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Lisboa
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksR to="/suggestedroutes">Rotas Sugeridas</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/routes">Rotas</NavLinksR>
            </NavItem>
            {!Cookies.get("token") ? (
              <NavItem>
                <NavLinksR to="/signup">Sign Up</NavLinksR>
              </NavItem>
            ) : (
              <NavItem>
                <NavLinksR to="/profile">Profile</NavLinksR>
              </NavItem>
            )}
          </NavMenu>
          <NavBtn>
            {!Cookies.get("token") ? (
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            ) : (
              <NavBtnLink onClick={logOut}>Sign Out</NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

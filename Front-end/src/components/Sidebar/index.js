import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkR, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    window.homepagecheck = function() {
        var check = false;
        if(document.location.pathname === "/"){
          check=true;
          }
        return check;
      }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                {window.homepagecheck() ?(<>
                    <SidebarLink to="braga" onClick={toggle}>Braga</SidebarLink>
                    <SidebarLink to="porto" onClick={toggle}>Porto</SidebarLink>
                    <SidebarLink to="lisboa" onClick={toggle}>Lisboa</SidebarLink>
                    </>
                ):(<></>)}
                    <SidebarLinkR to="/suggestedroutes" onClick={toggle}>Rotas Sugeridas</SidebarLinkR>
                    <SidebarLinkR to="/routes" onClick={toggle}>Rotas</SidebarLinkR>
                    <SidebarLinkR to="/signup" onClick={toggle}>Sign Up</SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLicl={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="braga" onClick={toggle}>Braga</SidebarLink>
                    <SidebarLink to="porto" onClick={toggle}>Porto</SidebarLink>
                    <SidebarLink to="lisboa" onClick={toggle}>Lisboa</SidebarLink>
                    <SidebarLink to="Places" onClick={toggle}>Locais</SidebarLink>
                    <SidebarLink to="Routes" onClick={toggle}>Rotas</SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

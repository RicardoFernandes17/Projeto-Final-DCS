import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkR, SideBtnWrap, SidebarRoute} from './SidebarElements'

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
                    <SidebarLinkR to="/places" onClick={toggle}>Locais</SidebarLinkR>
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

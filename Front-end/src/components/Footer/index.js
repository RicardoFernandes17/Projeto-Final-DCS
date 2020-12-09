import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Cidades </FooterLinkTitle>
                                <FooterLink to="/signin">Braga</FooterLink>
                                <FooterLink to="/signin">Porto</FooterLink>
                                <FooterLink to="/signin">Lisboa</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Cidades </FooterLinkTitle>
                                <FooterLink to="/signin">Braga</FooterLink>
                                <FooterLink to="/signin">Porto</FooterLink>
                                <FooterLink to="/signin">Lisboa</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Cidades </FooterLinkTitle>
                                <FooterLink to="/signin">Braga</FooterLink>
                                <FooterLink to="/signin">Porto</FooterLink>
                                <FooterLink to="/signin">Lisboa</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Cidades </FooterLinkTitle>
                                <FooterLink to="/signin">Braga</FooterLink>
                                <FooterLink to="/signin">Porto</FooterLink>
                                <FooterLink to="/signin">Lisboa</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
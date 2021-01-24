import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  FooterLinkS,
} from './FooterElements';
import Cookies from 'js-cookie';

const Footer = () => {
  window.homepagecheck = function () {
    var check = false;
    if (document.location.pathname === '/') {
      check = true;
    }
    return check;
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {window.homepagecheck() ? (
              <>
                <FooterLinkItems>
                  <FooterLinkTitle> Cidades </FooterLinkTitle>
                  <FooterLinkS to='braga'>Braga</FooterLinkS>
                  <FooterLinkS to='porto'>Porto</FooterLinkS>
                  <FooterLinkS to='lisboa'>Lisboa</FooterLinkS>
                </FooterLinkItems>
              </>
            ) : (
              <></>
            )}
            <FooterLinkItems>
              {!Cookies.get('token') ? (
                <>
                  <FooterLinkTitle> Auth </FooterLinkTitle>
                  <FooterLink to='/signin'>SignIn</FooterLink>
                  <FooterLink to='/signup'>SignUp</FooterLink>
                </>
              ) : (
                <>
                  <FooterLinkTitle> Cidades </FooterLinkTitle>
                  <FooterLink to='/routes'>Routes</FooterLink>
                  <FooterLink to='/suggestedroutes'>
                    Suggested Routes
                  </FooterLink>
                  <FooterLink to='/createroute'>Create a Route</FooterLink>
                </>
              )}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;

import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const RoutesContainer = styled.div`
    color: #000;
    background: #44120C;
    height:100vh;
    padding-top:80px;
`

export const RoutesWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    grid-row-gap: 10px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content:center;
`

export const RouteRow = styled.div`
    align-items:center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px){
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right: 0;
    border-radius:10px;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Name = styled(LinkR)`
    color: #000;
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 16px;
`
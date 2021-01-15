import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const RoutesContainer = styled.div`
    color: #fff;
    background: #000;
    height:100vh;
    padding-top:140px;
`

export const RoutesWrapper = styled.div`
    display: grid;
    z-index: 1;
    width:80%;
    max-width: 1100px;
    grid-row-gap: 10px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content:center;
    border:2px solid #d5322c;
    border-radius:20px;
    margin-bottom: 15px;
`

export const RoutesRow = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    display:grid;
    align-items:center;
    grid-auto-columns: minmax(auto, 1fr);
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
    max-width:400px;
`

export const Img = styled.img`
    width:100%;
    max-height:50%;
    margin:0;
    padding-right: 0;
    border-radius:10px;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    max-height:200px;
`

export const Name = styled(LinkR)`
    color: #d5322c;
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 16px;
`

export const City = styled.p`
    color: #d5322c;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const Creator = styled.p`
    color: #d5322c;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const CreatorLink = styled(LinkR)`
    color: #d5322c;
    text-decoration:none;
`
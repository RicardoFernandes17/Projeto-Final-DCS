import styled from 'styled-components'

export const ProfileContainer = styled.div`
    background: grey;
    height:100vh;
    color: white;
    font-family: 'lato','bebas-neue-by-fontfabric', 'Encode Sans Expanded', sans-serif;
`
export const ProfileWrapper = styled.div`
    display:grid;
    z-index:1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`

export const ProfileRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: 'col1 col2';
    margin-top: 200px;

    @media screen and (max-width: 768px){
        grid-template-areas:'col1' 'col2';
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
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Nome = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight:600;
    color: white;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Idade = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height: 24px;
    color: white;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width:500px;
    height: 500px;
    margin:0 0 10px 0;
    padding-right: 0;
    border-radius: 50%;
    object-fit:cover;
`
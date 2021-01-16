import styled from 'styled-components';

export const CreateRouteContainer = styled.div`
    color: #fff;
    background: #000;
    padding-top:140px;
`

export const CreateRouteWrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height:80%;
    }
`;

export const CreationForm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        padding:10px;
    }
`;

export const FormWrap = styled.div`
    display: grid;
    justify-content:center;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`

export const Form = styled.form`
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    padding:0px 32px;

    @media screen and (max-width:480px){
        padding:0px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom:40px;
    color: #d5322c;
    font-size:100px;
    font-weight:400;
    text-align:center;

    @media screen and (max-width:768px){
        font-size:60px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom:8px;
    font-size:24px;
    color: #d5322c;
`;

export const FormInput = styled.input`
    padding: 8px 16px;
    font-size:20px;
    margin-bottom: 32px;
    border:none;
    border-radius: 4px;
    font-family: 'Encode Sans Expanded', sans-serif;

    &:focus{
        outline: none;
    }
`;

export const FormButton = styled.button`
    background: #d5322c;
    padding: 16px 0;
    border:none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor:pointer;

    &:hover{
        background: #fff;
        color: #d5322c;
        transition: 0.3s ease-in-out;
    }
`;
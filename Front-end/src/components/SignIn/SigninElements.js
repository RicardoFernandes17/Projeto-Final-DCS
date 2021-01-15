import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    min-height:692px;
    position:fixed;
    bottom: 0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background: #d5322c;
`;

export const FormWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height:80%;
    }
`;

export const Icon = styled(LinkR)`
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color: #fff;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width:480px){
        margin-left:16px;
        margin-top:8px;
    }
`;

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        padding:10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:480px){
        padding:32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom:40px;
    color: #fff;
    font-size:20px;
    font-weight:400;
    text-align:center;
`;

export const FormLabel = styled.label`
    margin-bottom:8px;
    font-size:14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border:none;
    border-radius: 4px;
    font-family: 'Encode Sans Expanded', sans-serif;
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

export const LinksWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin:16px;
    text-align:center;
    box-sizing:border-box;
    font-size: 20px;
    padding-top: 16px;
`

export const SignInBtn = styled(LinkR)`
    text-align:center;
    border:none;
    border-radius: 4px;
    color: #fff;
    cursor:pointer;
    text-decoration:none;

    &:hover{
        color: #d5322c;
    }
`

export const Text = styled.span`
    text-align:center;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #d5322c;
    }
`;
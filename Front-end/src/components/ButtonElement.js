import styled from 'styled-components'
import {Link} from 'react-router-dom'
/* import {LinkS} from 'react-scroll' */

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#d5322c' : '#010606')};
    white-space:none;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#000' : '#fff' )};
        color: ${({dark}) => (dark ? '#fff' : '#000')};
    }
`
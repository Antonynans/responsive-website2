import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const AccountContainer = styled.div`
    background-color: #242424;
    width: 100%;
    min-height: 100vh;
`

export const FormContainer = styled.div`
    background-color: white;
    height: 100%;
    width: 30%;
    padding: 2%;
    padding-top: 3%;
    border-radius: 3px;
    margin: auto;
    margin-top: 1%;
    
        @media screen and (max-width: 600px){
            width: auto;
            margin: 5%;
            margin-top: 5%;
        }

`;

export const Form = styled.div`
    width: 100%;
`;

export const FormText = styled.p`
    letter-spacing: 1px;
    font-size: ${({font}) => font? font: "1.2rem"};
    margin: ${({margin})=> margin? margin: 0};
    text-align: ${({align}) => align?align:"center"};
`

export const NavIcon = styled(FaMagento)`
    margin-right: .5rem;
   
`;

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0%;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: ${({color}) => color?color:'#0F52BA'};
`

export const NoteInput = styled.input`
    width: 100%;
    height: 50%;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid gray;
    box-sizing: border-box;
    margin-bottom: 5%;
`

export const NoteButton = styled.button`
    width: 100%;
    height: 3.2rem;
    font-size: 16px;    
    color: #fff;
    background-color: ${({color})=> color?color: "#000"};
    border-radius: 5px;
    margin-bottom: 5%;
    cursor: pointer;

    &:hover{
        background-color: #A54302; 
        transition: all 0.3s ease;
    }
`
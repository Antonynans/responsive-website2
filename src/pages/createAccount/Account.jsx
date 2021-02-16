import styled from 'styled-components'
import { Container } from '../../globalStyles/GlobalStyles'
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const AccountContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;

    background-color: #242424;
    /* min-height: auto; */
    width: 100%;
    height: 100vh;
    /* margin: auto; */
    /* margin-top: 2%; */

    /* ${Container} */

    @media screen and (max-width: 360px){
        /* height: 100vh; */
        height: 34rem;
    }
`;

export const FormContainer = styled.div`
    /* display: flex;
    flex-flow: column nowrap; */
    background-color: white;
    height: auto;
    width: 50%;
    padding: 5%;
    padding-top: 3%;
    border-radius: 3px;
    /* justify-content: center; */
    /* justify-content: center;
    align-items: center;
    text-align: center; */
    /* margin-left: 30%; */
    margin: auto;
    margin-top: 2%;
    /* position: relative; */
    
        @media screen and (max-width: 600px){
            width: auto;
            margin: 5%;
            margin-top: 10%;
        }

`;

export const Form = styled.div`
    width: 100%;
`;

export const FormText = styled.p`
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    font-size: ${({font}) => font? font: "1.2rem"};
    margin: ${({margin})=> margin? margin: 0};
    text-align: ${({align}) => align?align:"center"};
    /* font-weight: 500; */
`

export const NavIcon = styled(FaMagento)`
    margin-right: .5rem;
   
`;

export const NavLogo = styled(Link)`
    color: #fff;
    /* justify-self: flex-start; */
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2% 0 0 0%;
    height: 0%;
    
        @media screen and (max-width: 600px){
            margin: 5% 0 0 0%;
        }
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
    /* background-color: gray; */
    background-color: ${({color})=> color?color: "#000"};
    border-radius: 5px;
    margin-bottom: 5%;
    cursor: pointer;

    &:hover{
        background-color: #A54302; 
        transition: all 0.3s ease;
    }
`
import styled from 'styled-components'
import { Container } from '../../globalStyles/GlobalStyles'
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const AccountContainer = styled.div`
    display: flex;
    background-color: #242424;
    min-height: 100vh;

    /* ${Container} */
`;

export const FormContainer = styled.div`
    background-color: white;
    height: auto;
    width: 400px;
    padding: 5%;
    padding-top: 3%;
    border-radius: 3px;
    margin-top: 10%;
    margin-left: 30%;
    position: fixed;
    
        @media screen and (max-width: 768px){
            width: auto;
            margin: 20% 2% 2% 2%;
        }

`;

export const Form = styled.div`
    width: 100%;
`;

export const FormText = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.2rem;
    margin-bottom: 6%;
    font-weight: 500;
`

export const NavIcon = styled(FaMagento)`
    margin-right: .5rem;
   
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin: 5% 0 0 40%;
    height: 0%;
    
        @media screen and (max-width: 768px){
            margin: 5% 0 0 25%;
        }
    
`;

export const NoteInput = styled.input`
    width: 100%;
    height: 50%;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid gray;
    box-sizing: border-box;
`

export const NoteButton = styled.button`
    width: 100%;
    height: 3.5rem;
    font-size: 16px;    
    color: #bb2323;
    background-color: gray;
    border-radius: 5px;

    cursor: pointer;

    &hover{
        background-color: #A54302; 
    }
`
import styled from 'styled-components'
import { Container } from '../../globalStyles/GlobalStyles'
import { FaMagento } from 'react-icons/fa';


export const AccountContainer = styled.div`
    display: flex;
    background-color: #242424;
    /* justify-content: space-between; */
    min-height: 100vh;

    /* ${Container} */
`;

export const FormContainer = styled.div`
    background-color: white;
    height: 100%;
    padding: 5%;
    padding-top: 3%;
    border-radius: 3px;
    margin-top: 10%;

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
    margin-left: 2%;
    font-size: 2rem;
    color: #fff;
    align-items: center;


`;

export const NoteInput = styled.input`
    width: 100%;
    height: 50%;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid gray;
    box-sizing: border-box;
`
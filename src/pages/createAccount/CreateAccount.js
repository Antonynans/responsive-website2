import React, { useState } from 'react'
import { AccountContainer, Form, FormContainer, FormText, NavIcon, NavLogo, NoteButton, NoteInput, FooterLink } from './Account'


export default function CreateAccount({history}) {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    }
    
    
    return (
        <AccountContainer>
            <NavLogo to='/'>
                <NavIcon />
                ULTRA
            </NavLogo>
            <FormContainer>
                <NoteButton color="skyblue">Create Account with Twitter</NoteButton>
                <NoteButton color="darkBlue">Create Account with Facebook</NoteButton>
                <NoteButton color="royalBlue">Create Account with Linkedin</NoteButton>

                <FormText margin="2%">or</FormText>
                <Form>
                    
                    <NoteInput 
                    placeholder='Your Email Address'
                    id='email'
                    type='text'
                    required
                    value={data.email}
                    onChange={handleChange}
                    />
                    <NoteInput 
                    placeholder='Your Password'
                    id='password'
                    type='password'
                    onChange={handleChange}
                    value={data.password}
                    />
                     
                    <NoteButton color="#0F52BA" onClick={ e => (history.push("/login"))}>
                        Create Account
                    </NoteButton>
                </Form>
                <FormText font=".9rem">Have an account?</FormText>
                <FooterLink to="/login"><FormText font="1rem">Sign in</FormText></FooterLink>
            </FormContainer>
        </AccountContainer>
    )
}

import React from 'react'
import { AccountContainer, FooterLink, Form, FormContainer, FormText, NavIcon, NavLogo, NoteButton, NoteInput } from './Account'

export default function Login() {
    return (
        <AccountContainer>
            <NavLogo to='/'>
                <NavIcon />
                ULTRA
            </NavLogo>
            <FormContainer>
                <FormText>Login</FormText>
                <Form>
                <NoteInput 
                    placeholder='Your Email Address'
                    id='email'
                    type='text'
                    required
                    // value={data.email}
                    // onChange={handleChange}
                    />
                    <NoteInput 
                    placeholder='Your Password'
                    id='password'
                    type='password'
                    // onChange={handleChange}
                    // value={data.password}
                    />
                    <FooterLink to="/#"><FormText margin="0 0 5% 0" align="right" font="1rem">Forgot password?</FormText></FooterLink>

                    <NoteButton color="#0F52BA">
                        Login
                    </NoteButton>
                </Form>
                <FormText font=".8rem">Or Sign Up Using</FormText>
            </FormContainer>
        </AccountContainer>
    )
};

import React, { useState } from 'react'
import { AccountContainer, Form, FormContainer, FormText, NavIcon, NavLogo, NoteButton, NoteInput } from './Account'


export default function CreateAccount({history}) {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setValues({
            ...setValues,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = values.email.length > 0;
        const password = values.password.length > 0;
        const confirmPassword = values.confirmPassword.length > 0;
        if (password === confirmPassword) {
            alert('Welcome')
            // history.push("/login");
        }
    }
    
    
    return (
        <AccountContainer>
            <NavLogo to='/'>
                <NavIcon />
                ULTRA
            </NavLogo>
            <FormContainer>
                <FormText>create new account</FormText>
                <Form>
                    {console.log(values)}
                    <NoteInput 
                    placeholder='First Name'
                    id='firstName'
                    type='text'
                    onChange={handleChange}
                    value={values.firstName}
                    />
                    <NoteInput 
                    placeholder='Last Name'
                    id='lastName'
                    type='text'
                    value={values.lastName}
                    onChange={handleChange}
                    />
                    <NoteInput 
                    placeholder='Email'
                    id='email'
                    type='text'
                    value={values.email}
                    />
                    <NoteInput 
                    placeholder='Password'
                    id='password'
                    type='password'
                    onChange={handleChange}
                    value={values.password}
                    />
                     <NoteInput 
                    placeholder='Confirm Password'
                    id='confirmPassword'
                    type='password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    />
                    <NoteButton onClick={handleSubmit}>
                        Create Account
                    </NoteButton>
                </Form>
            </FormContainer>
        </AccountContainer>
    )
}

import React from 'react'
import { AccountContainer, Form, FormContainer, FormText, NavIcon, NoteInput } from './Account'


export default function CreateAccount() {
    return (
        <AccountContainer>
            <div>
                <NavIcon />
            </div>
            <FormContainer>
                <FormText>create new account</FormText>
                <Form>
                    
                    <NoteInput 
                    label='First Name'
                    id='firstName'
                    />
                    <NoteInput 
                    label='Last Name'
                    id='lastName'
                    type='text'
                    />
                </Form>
            </FormContainer>
        </AccountContainer>
    )
}

import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap , Icon, Form, FormH1, Text} from './SignupElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">RubyTrails</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Inscreve-te aqui</FormH1>
                            <FormLabel htmlFor='for'>Primeiro e ultimo nome</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Foto de Perfil</FormLabel>
                            <FormInput type='file' required />
                            <FormLabel htmlFor='for'>Data de nascimento</FormLabel>
                            <FormInput type='date' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type="submit">Continua</FormButton>
                            <Text>Esqueceste a Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn

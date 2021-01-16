import React from 'react'
import { CreateRouteContainer , CreateRouteWrapper , CreationForm, Form, FormH1, FormLabel, FormInput, FormButton, Column1, Column2, FormWrap} from "./CreateRouteElements"

const CreateRoute = () => {
    return (
        <>
            <CreateRouteContainer>
                <CreateRouteWrapper>
                    <FormWrap>
                        <Column1>
                            <FormH1>Cria a tua rota</FormH1>
                        </Column1>
                        <Column2>
                            <CreationForm>                            
                                <Form>
                                    <FormLabel htmlFor="for">Estadia:</FormLabel>
                                    <FormInput name="hotel" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Pequeno-almoço</FormLabel>
                                    <FormInput name="breakfast" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Atividade da manhã</FormLabel>
                                    <FormInput name="morningactivity" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Almoço</FormLabel>
                                    <FormInput name="lunch" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Atividade da tarde</FormLabel>
                                    <FormInput name="afternoonactivity" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Jantar</FormLabel>
                                    <FormInput name="dinner" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Atividade da noite</FormLabel>
                                    <FormInput name="eveningactivity" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormLabel htmlFor="for">Cidade</FormLabel>
                                    <FormInput name="city" value=""/*  onChange={handleChange} */ type="text"/>
                                    <FormButton type="submit">Criar</FormButton>
                                </Form>
                            </CreationForm>
                        </Column2>
                    </FormWrap>
                </CreateRouteWrapper>
            </CreateRouteContainer>
        </>
    )
}

export default CreateRoute

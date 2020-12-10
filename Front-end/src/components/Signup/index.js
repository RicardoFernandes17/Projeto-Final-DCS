import React, {useState} from 'react'
import axios from 'axios'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap , Icon, Form, FormH1, Text} from './SignupElements'

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        address: "",
        mail: "",
        password: "",
      });
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setData((curData) => {
          return { ...curData, [name]: value };
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const user = {
          user_name: data.name,
          user_address: data.address,
          user_mail: data.mail,
          user_password: data.password,
        };
    
        axios.post("http://localhost:3000/users/", user).then((res) => {
          console.log(res);
          console.log(res.data);
        });
    };
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">RubyTrails</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit} method="POST" action="">
                            <FormH1>Inscreve-te aqui</FormH1>
                            <FormLabel htmlFor='for'>Primeiro e ultimo nome</FormLabel>
                            <FormInput name = 'name' value={data.name} onChange={handleChange} type='name' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput name = 'mail' value={data.mail} onChange={handleChange} type='email' required />
                            <FormLabel htmlFor='for'>Address</FormLabel>
                            <FormInput name = 'address' value={data.address} onChange={handleChange} type='address' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput name = 'password' value={data.password} onChange={handleChange} type='password' required />
                            <FormButton type="submit">Continua</FormButton>
                            <Text>Esqueceste a Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignUp;

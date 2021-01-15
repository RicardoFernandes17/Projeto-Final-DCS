import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Form,
  FormH1,
  LinksWrapper,
  SignInBtn,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const [data, setData] = useState({
    mail: "",
    password: "",
  });
  const history = useHistory();

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
      user_mail: data.mail,
      user_password: data.password,
    };

    axios.post("http://localhost:3000/login/", user).then((res) => {
      if (res.status === 200) {
        var nome = res.data.nome;
        Cookies.set("nome", nome);

        history.push("/profile");
      }
    });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">RubyTrails</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} method="POST" action="">
              <FormH1>SignIn to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                name="mail"
                value={data.mail}
                onChange={handleChange}
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
                required
              />
              <FormButton type="submit">Continua</FormButton>
              <LinksWrapper>
                <SignInBtn to='/signup'>Regista-te</SignInBtn>
                <Text>Esqueceste a Password?</Text>
              </LinksWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

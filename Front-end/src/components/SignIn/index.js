import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
        history.push("/users");
      }
    });

    /* var mail = data.mail;
    var password = data.password;
    console.log(mail, password);
    var session_url = "http://localhost:3000/login/";
    axios
      .post(
        session_url,
        {},
        {
          auth: {
            user_mail: mail,
            user_password: password,
          },
        }
      )
      .then(function (response) {
        console.log("Authenticated", response);
      })
      .catch(function (error) {
        console.log("Error on Authentication", error);
      }); */

    /* await axios.post(
      "http://localhost:3000/login/",
      {},
      {
        auth: {
          user_mail: data.mail,
          user_password: data.password,
        },
      }
    ); */

    /* axios
      .post("http://localhost:3000/login/", {
        user_mail: data.mail,
        user_password: data.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */

    /* axios.post("http://localhost:3000/login/", user).then((res) => {
      console.log("sopa");
      console.log(res);
      console.log(res.data);
    }); */
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
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
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
  SignUpBtn,
  Text,
} from "./SignupElements";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    mail: "",
    password: "",
  });
  const history = useHistory();

  const [state, setState] = useState({
    open: false,
    msg: "",
    vertical: "top",
    horizontal: "center",
  });

  const [success, setSuccess] = useState(true);

  const { vertical, horizontal, open } = state;

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

    axios
      .post("http://localhost:3000/users/", user)
      .then((res) => {
        if (res.status === 201) {
          setState({ ...state, open: true, msg: res.data.message });
          setSuccess(true);
          setTimeout(function timeout() {
            history.push("/signin");
          }, 1500);
        }
      })
      .catch((error) => {
        setState({ ...state, open: true, msg: error.response.data.message });
        setSuccess(false);
      });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">RubyTrails</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} method="POST" action="">
              <FormH1>Inscreve-te aqui</FormH1>
              <FormLabel htmlFor="for">Primeiro e ultimo nome</FormLabel>
              <FormInput
                name="name"
                value={data.name}
                onChange={handleChange}
                type="name"
                required
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                name="mail"
                value={data.mail}
                onChange={handleChange}
                type="email"
                required
              />
              <FormLabel htmlFor="for">Address</FormLabel>
              <FormInput
                name="address"
                value={data.address}
                onChange={handleChange}
                type="address"
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
                <SignUpBtn to="/signin">LogIn</SignUpBtn>
                <Text>Esqueceste a Password?</Text>
              </LinksWrapper>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={state.msg}
                key={vertical + horizontal}
              >
                <Alert
                  onClose={handleClose}
                  severity={success === true ? "success" : "error"}
                >
                  {state.msg}
                </Alert>
              </Snackbar>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

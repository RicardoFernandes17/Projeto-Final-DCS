import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  CreateRouteContainer,
  CreateRouteWrapper,
  CreationForm,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Column1,
  Column2,
  FormWrap,
} from "./CreateRouteElements";

const CreateRoute = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    hotel: "",
    breakfast: "",
    morningactivity: "",
    lunch: "",
    afternoonactivity: "",
    dinner: "",
    eveningactivity: "",
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

    const route = {
      name: data.name,
      accommodation: data.hotel,
      breakfast: data.breakfast,
      morningActivity: data.morningactivity,

      lunch: data.lunch,
      activityAfterLunch: data.afternoonactivity,
      dinner: data.dinner,
      nightActivity: data.eveningactivity,
      city: data.city,
    };

    history.push("/routes");

    axios.post("http://localhost:3000/itineraries", route).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

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
                <Form onSubmit={handleSubmit} method="POST" action="">
                  <FormLabel htmlFor="for">Nome:</FormLabel>
                  <FormInput
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    maxlength="30"
                    required
                  />
                  <FormLabel htmlFor="for">Estadia:</FormLabel>
                  <FormInput
                    name="hotel"
                    value={data.hotel}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Pequeno-almoço</FormLabel>
                  <FormInput
                    name="breakfast"
                    value={data.breakfast}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Atividade da manhã</FormLabel>
                  <FormInput
                    name="morningactivity"
                    value={data.morningactivity}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Almoço</FormLabel>
                  <FormInput
                    name="lunch"
                    value={data.lunch}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Atividade da tarde</FormLabel>
                  <FormInput
                    name="afternoonactivity"
                    value={data.afternoonactivity}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Jantar</FormLabel>
                  <FormInput
                    name="dinner"
                    value={data.dinner}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Atividade da noite</FormLabel>
                  <FormInput
                    name="eveningactivity"
                    value={data.eveningactivity}
                    onChange={handleChange}
                    type="text"
                    maxlength="50"
                    required
                  />
                  <FormLabel htmlFor="for">Cidade</FormLabel>
                  <FormInput
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    type="text"
                    maxlength="15"
                    required
                  />
                  <FormButton type="submit">Criar</FormButton>
                </Form>
              </CreationForm>
            </Column2>
          </FormWrap>
        </CreateRouteWrapper>
      </CreateRouteContainer>
    </>
  );
};

export default CreateRoute;

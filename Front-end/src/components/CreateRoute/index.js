import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
} from './CreateRouteElements';
import Cookies from 'js-cookie';

const CreateRoute = () => {
  const [data, setData] = useState({
    name: '',
    hotel: '',
    breakfast: '',
    city: '',
    morningactivity: '',
    date_creation: '',
    lunch: '',
    afternoonactivity: '',
    dinner: '',
    eveningactivity: '',
  });
  const history = useHistory();

  const [state, setState] = useState({
    open: false,
    msg: '',
    vertical: 'top',
    horizontal: 'center',
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

    let date_creation = new Date().getTime();
    let user_id = Cookies.get('user_id');

    const route = {
      name: data.name,
      accommodation: data.hotel,
      breakfast: data.breakfast,
      morningActivity: data.morningactivity,
      date_creation: date_creation,
      lunch: data.lunch,
      activityAfterLunch: data.afternoonactivity,
      dinner: data.dinner,
      nightActivity: data.eveningactivity,
      city: data.city,
      comments: data.comments,
      user_id: user_id,
    };

    var config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.getJSON('token')}`,
      },
    };

    axios
      .post('http://localhost:3000/itineraries', route, config)
      .then((res) => {
        if (res.status === 201) {
          setState({ ...state, open: true, msg: res.data.message });
          setSuccess(true);
          console.log(res);
          setTimeout(function timeout() {
            history.push('/route/id=' + res.data.data.id);
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={state.msg}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={success === true ? 'success' : 'error'}
        >
          {state.msg}
        </Alert>
      </Snackbar>
      <CreateRouteContainer>
        <CreateRouteWrapper>
          <FormWrap>
            <Column1>
              <FormH1>Cria a tua rota</FormH1>
            </Column1>
            <Column2>
              <CreationForm>
                <Form onSubmit={handleSubmit} method='POST' action=''>
                  <FormLabel htmlFor='for'>Nome:</FormLabel>
                  <FormInput
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    type='text'
                    maxlength='30'
                    required
                  />
                  <FormLabel htmlFor='for'>Estadia:</FormLabel>
                  <FormInput
                    name='hotel'
                    value={data.hotel}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Pequeno-almoço</FormLabel>
                  <FormInput
                    name='breakfast'
                    value={data.breakfast}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Atividade da manhã</FormLabel>
                  <FormInput
                    name='morningactivity'
                    value={data.morningactivity}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Almoço</FormLabel>
                  <FormInput
                    name='lunch'
                    value={data.lunch}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Atividade da tarde</FormLabel>
                  <FormInput
                    name='afternoonactivity'
                    value={data.afternoonactivity}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Jantar</FormLabel>
                  <FormInput
                    name='dinner'
                    value={data.dinner}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Atividade da noite</FormLabel>
                  <FormInput
                    name='eveningactivity'
                    value={data.eveningactivity}
                    onChange={handleChange}
                    type='text'
                    maxlength='50'
                    required
                  />
                  <FormLabel htmlFor='for'>Cidade</FormLabel>
                  <FormInput
                    name='city'
                    value={data.city}
                    onChange={handleChange}
                    type='text'
                    maxlength='15'
                    required
                  />
                  <FormLabel htmlFor='for'>Comment:</FormLabel>
                  <FormInput
                    name='comments'
                    value={data.comments}
                    onChange={handleChange}
                    type='text'
                    maxlength='30'
                    required
                  />
                  <FormButton type='submit'>Criar</FormButton>
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

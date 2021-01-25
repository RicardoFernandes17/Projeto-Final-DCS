import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';
import {
  RouteContainer,
  RouteWrapper,
  ImgWrap,
  Img,
  TextWrapper,
  InfoWrapper,
  Text,
  Name,
  City,
  Creator,
  CreatorLink,
  Col1,
  Col2,
} from '../Route/RouteElements';
/* import {FaStar} from 'react-icons/fa' */

const SugRoute = (props) => {
  let { id } = useParams();
  console.log(id);
  const [itinerary, setItinerary] = useState(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (itinerary === null && id) {
      axios
        .get('http://localhost:3000/sugesteditineraries/' + id, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cookies.getJSON('token')}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setItinerary(res.data);
          }
        });
    }
  }, [id, itinerary]);
  console.log(itinerary);

  /*  */
  return (
    <>
      {itinerary ? (
        <RouteContainer>
          <RouteWrapper id={itinerary.itinerario_id}>
            <ImgWrap>
              <Img src='https://source.unsplash.com/random?portugal'></Img>
            </ImgWrap>
            <TextWrapper>
              <Name>{itinerary.name}</Name>
              <InfoWrapper>
                <Col1>
                  <City>{itinerary.name}</City>
                  <Text>Estadia: {itinerary.name}</Text>
                  <Text>Pequeno-Almoço: {itinerary.name}</Text>
                  <Text>Atividade da manhã: {itinerary.name}</Text>
                  <Text>Almoço: {itinerary.name}</Text>
                  <Text>Atividade da tarde: {itinerary.name}</Text>
                  <Text>Jantar: {itinerary.name}</Text>
                  <Text>Atividade da noite: {itinerary.name}</Text>
                </Col1>
                <Col2></Col2>
              </InfoWrapper>
              <Creator>
                Created by:{' '}
                <CreatorLink to='/profile'>{itinerary.name}</CreatorLink>
              </Creator>
            </TextWrapper>
          </RouteWrapper>
        </RouteContainer>
      ) : (
        <h1>Não existe</h1>
      )}
    </>
  );
};

export default SugRoute;

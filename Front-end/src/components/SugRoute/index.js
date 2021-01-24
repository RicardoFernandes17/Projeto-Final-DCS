import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  useEffect(() => {
    if (Cookies.get('token')) {
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
    } else {
      history.push('/signin');
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
                  <City>{itinerary.city}</City>
                  <Text>Estadia: {itinerary.accommodation}</Text>
                  <Text>Pequeno-Almoço: {itinerary.breakfast}</Text>
                  <Text>Atividade da manhã: {itinerary.morningActivity}</Text>
                  <Text>Almoço: {itinerary.lunch}</Text>
                  <Text>
                    Atividade da tarde: {itinerary.activityAfterLunch}
                  </Text>
                  <Text>Jantar: {itinerary.dinner}</Text>
                  <Text>Atividade da noite: {itinerary.nightActivity}</Text>
                </Col1>
                <Col2></Col2>
              </InfoWrapper>
              <Creator>Created by: RUBYTRAILS</Creator>
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

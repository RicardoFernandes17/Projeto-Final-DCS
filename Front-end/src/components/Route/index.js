import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router";
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
  RatingCount,
  RatingValue,
  Col1,
  Col2,
  StarIcon,
} from "./RouteElements";
/* import {FaStar} from 'react-icons/fa' */

const RouteS = (props) => {
  let { id } = useParams();
  console.log(id);
  const [itinerary, setItinerary] = useState(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (itinerary === null && id) {
      axios
        .get("http://localhost:3000/itineraries/" + id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.getJSON("token")}`,
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

  const handleRating = (rating) => {
    let user_id = Cookies.get("user_id");
    let itinerario_id = itinerary.itinerario_id;

    const dataRating = {
      rating_value: rating,
      itinerario_id: itinerario_id,
      user_id: user_id,
    };

    axios.post("http://localhost:3000/reviews", dataRating).then((res) => {
      console.log(res);
    });

    setValue(rating);
  };

  /*  */
  return (
    <>
      {itinerary ? (
        <RouteContainer>
          <RouteWrapper id={itinerary.itinerario_id}>
            <ImgWrap>
              <Img src={itinerary.name}></Img>
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
                <Col2>
                  <StarIcon
                    rate={1}
                    filled={value >= 1 ? true : false}
                    onClick={() => handleRating(1)}
                  />
                  <StarIcon
                    rate={2}
                    filled={value >= 2 ? true : false}
                    onClick={() => handleRating(2)}
                  />
                  <StarIcon
                    rate={3}
                    filled={value >= 3 ? true : false}
                    onClick={() => handleRating(3)}
                  />
                  <StarIcon
                    rate={4}
                    filled={value >= 4 ? true : false}
                    onClick={() => handleRating(4)}
                  />
                  <StarIcon
                    rate={5}
                    filled={value >= 5 ? true : false}
                    onClick={() => handleRating(5)}
                  />
                  <RatingValue>{itinerary.name} Estrelas</RatingValue>
                  <RatingCount>{itinerary.name} Avaliações</RatingCount>
                </Col2>
              </InfoWrapper>
              <Creator>
                Created by:{" "}
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

export default RouteS;

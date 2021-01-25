import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

  const [itinerary, setItinerary] = useState(null);

  const [value, setValue] = useState(0);

  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (Cookies.get("token")) {
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
              getRatingAverage();
              setItinerary(res.data);
            }
          });
      }
    } else {
      history.push("/signin");
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
  const getRatingAverage = () => {
    axios.get("http://localhost:3000/reviews/" + id).then((res) => {
      let data = res.data;
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        count = count + data[i].rating;
      }
      let avg = count / data.length;
      console.log(count);
      setRating(avg);
      setCount(data.length);
    });
  };

  /*  */
  return (
    <>
      {itinerary ? (
        <RouteContainer>
          <RouteWrapper id={itinerary.itinerario_id}>
            <ImgWrap>
              <Img src="https://source.unsplash.com/random?portugal"></Img>
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
                  <RatingValue>{rating} Estrelas</RatingValue>
                  <RatingCount>{count} Avaliações</RatingCount>
                </Col2>
              </InfoWrapper>
              <Creator>
                Created by:{" "}
                <CreatorLink to="/profile">{itinerary.name}</CreatorLink>
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

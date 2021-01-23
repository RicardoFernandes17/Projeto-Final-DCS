import React, { useState } from 'react';
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
} from './RouteElements';
/* import {FaStar} from 'react-icons/fa' */

const RouteS = ({
  id,
  placename,
  city,
  creator,
  img,
  accomodation,
  breakfast,
  morningActivity,
  lunch,
  activityAfterLunch,
  dinner,
  nigthActivity,
  ratingAverage,
  ratingCounter,
}) => {
  const [value, setValue] = useState(0);

  const handleRating = (rating) => {
    //chamada api

    setValue(rating);
  };

  /*  */
  return (
    <>
      <RouteContainer>
        <RouteWrapper id={id}>
          <ImgWrap>
            <Img src={img}></Img>
          </ImgWrap>
          <TextWrapper>
            <Name>{placename}</Name>
            <InfoWrapper>
              <Col1>
                <City>{city}</City>
                <Text>Estadia: {accomodation}</Text>
                <Text>Pequeno-Almoço: {breakfast}</Text>
                <Text>Atividade da manhã: {morningActivity}</Text>
                <Text>Almoço: {lunch}</Text>
                <Text>Atividade da tarde: {activityAfterLunch}</Text>
                <Text>Jantar: {dinner}</Text>
                <Text>Atividade da noite: {nigthActivity}</Text>
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
                <RatingValue>{ratingAverage} Estrelas</RatingValue>
                <RatingCount>{ratingCounter} Avaliações</RatingCount>
              </Col2>
            </InfoWrapper>
            <Creator>
              Created by: <CreatorLink to='/profile'>{creator}</CreatorLink>
            </Creator>
          </TextWrapper>
        </RouteWrapper>
      </RouteContainer>
    </>
  );
};

export default RouteS;

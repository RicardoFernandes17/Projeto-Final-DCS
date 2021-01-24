import React from 'react';
import {
  RoutesContainer,
  RoutesWrapper,
  RoutesRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  Name,
  City,
  Creator,
  CreatorLink,
} from './RoutesElements';
import axios from 'axios';

const Routes = () => {
  let route;

  function handleRoutes(data) {
    route.push(
      <RoutesWrapper>
        <RoutesRow id={data.itinerario_id}>
          <Column1>
            <ImgWrap>
              <Img alt='' />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <Name to={'/route/id=' + data.itinerario_id}>{data.name}</Name>
              <City>{data.city}</City>
              <Creator>
                Created by:
                <CreatorLink to='/profile'>{data.user_id}</CreatorLink>
              </Creator>
            </TextWrapper>
          </Column2>
        </RoutesRow>
      </RoutesWrapper>
    );
  }
  const handleStart = () => {
    axios.get('http://localhost:3000/itineraries').then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        handleRoutes(res.data[i]);

        /* route.push(res.data[i].itinerario_id); */
      }
      console.log(route);
    });
  };

  return (
    <>
      <RoutesContainer id='places' onLoad={handleStart()}>
        {route}
      </RoutesContainer>
    </>
  );
};

export default Routes;

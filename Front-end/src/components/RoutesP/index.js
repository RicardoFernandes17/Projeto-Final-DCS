import React, { useEffect, useState } from 'react';
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
  function handleRoutes(data) {
    return (
      <RoutesWrapper key={data.itinerario_id}>
        <RoutesRow id={data.itinerario_id}>
          <Column1>
            <ImgWrap>
              <Img src='https://source.unsplash.com/random?portugal' alt='' />
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

  const [routesData, setRoutesData] = useState([]);

  useEffect(() => {
    if (routesData.length === 0) {
      handleStart();
    }
  }, [routesData]);

  const handleStart = () => {
    axios.get('http://localhost:3000/itineraries').then((res) => {
      setRoutesData(res.data);
      /* for (var i = 0; i < res.data.length; i++) {
        handleRoutes(res.data[i]);
        console.log('nuno gay');
         route.push(res.data[i].itinerario_id); 
      } */
      console.log(res);
    });
  };

  return (
    <>
      <RoutesContainer id='places'>
        {routesData.map((route) => handleRoutes(route))}
      </RoutesContainer>
    </>
  );
};

export default Routes;

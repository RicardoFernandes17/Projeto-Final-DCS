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
} from '../RoutesP/RoutesElements';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

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
              <h1>{data.value}</h1>
            </TextWrapper>
          </Column2>
        </RoutesRow>
      </RoutesWrapper>
    );
  }

  const [averageData, setAverageData] = useState([]);

  useEffect(() => {
    if (averageData.length === 0) {
      handleStart();
    }
  }, [averageData]);

  const history = useHistory();

  const handleStart = () => {
    if (Cookies.get('token')) {
      axios.get('http://localhost:3000/topReviews').then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          let avgdata = res.data[i];
          axios
            .get(
              'http://localhost:3000/itineraries/' + res.data[i].itinerario_id,
              {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${Cookies.getJSON('token')}`,
                },
              }
            )
            .then((res2) => {
              let avg = {
                ...res2.data,
                value: avgdata['AVG(rating_value)'],
              };
              setAverageData((curr) => [...curr, avg]);
            });
        }
        /* setAverageData(res.data); */
      });
    } else {
      history.push('/signin');
    }
  };

  return (
    <>
      <RoutesContainer id='places'>
        {averageData.length > 1 &&
          averageData.map((data) => handleRoutes(data))}
      </RoutesContainer>
    </>
  );
};

export default Routes;

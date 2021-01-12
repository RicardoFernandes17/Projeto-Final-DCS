import React from 'react'
import {RouteContainer, RouteWrapper, ImgWrap, Img, TextWrapper,InfoWrapper, Text, Name, City, Creator, CreatorLink, RatingCount, RatingValue, Col1, Col2} from './RouteElements'
import {FaStar} from 'react-icons/fa'

const RouteS = ({id, placename, city, creator,img, accomodation, breakfast,morningActivity,lunch,activityAfterLunch,dinner,nigthActivity,ratingAverage, ratingCounter}) => {
    return(
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
                                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                    <RatingValue>{ratingAverage} Estrelas</RatingValue>
                                    <RatingCount>{ratingCounter} Avaliações</RatingCount>
                                </Col2>    
                        </InfoWrapper>
                        <Creator>Created by: <CreatorLink to="/profile">{creator}</CreatorLink></Creator>
                    </TextWrapper>
                </RouteWrapper>
            </RouteContainer>
        </>
    )
}

export default RouteS
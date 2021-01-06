import React from 'react'
import { PlacesWrapper, PlacesRow, Column1, Column2, ImgWrap, Img, TextWrapper, Name, City,Creator,CreatorLink} from './PlacesElements'

const Places = ({id, placename, city, creator, img}) => {
    return (
    
        <>
            <PlacesWrapper>
                <PlacesRow id={id}>
                    <Column1>
                        <ImgWrap>
                            <Img src={img} alt=""/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Name to="/place" >{placename}</Name>
                            <City>{city}</City>
                            <Creator>Created by: <CreatorLink to="/profile">{creator}</CreatorLink></Creator>
                        </TextWrapper>
                    </Column2>
                </PlacesRow>
            </PlacesWrapper>   
        </>
    )
}

export default Places

import React from 'react'
import { RoutesWrapper, RoutesRow, Column1, Column2, ImgWrap, Img, TextWrapper, Name, City,Creator,CreatorLink} from './RoutesElements'

const Routes = ({id, nick, placename, city, creator, img}) => {
    return (
        <>
            <RoutesWrapper>
                <RoutesRow id={id}>
                    <Column1>
                        <ImgWrap>
                            <Img src={img} alt=""/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Name to={'/route/nick='+nick} >{placename}</Name>
                            <City>{city}</City>
                            <Creator>Created by: <CreatorLink to="/profile">{creator}</CreatorLink></Creator>
                        </TextWrapper>
                    </Column2>
                </RoutesRow>
            </RoutesWrapper>   
        </>
    )
}

export default Routes

import React from 'react'
import { RoutesWrapper, RouteRow, Column1, Column2, ImgWrap, Img, TextWrapper, Name} from './RoutesElements'

const Routes = () => {
    return (
        <>
            <RoutesWrapper>
                <RouteRow>
                    <Column1>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Name>Rota do Monte São Pedro1</Name>
                        </TextWrapper>
                    </Column2>
                </RouteRow>
            </RoutesWrapper>   
        </>
    )
}

export default Routes

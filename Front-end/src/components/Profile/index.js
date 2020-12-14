import React from 'react'
import {ProfileContainer, ProfileWrapper, ProfileRow, Column1,Column2, TextWrapper,Nome, Idade, ImgWrap, Img} from './ProfileElements'

const Profile = ({id, nome, idade,img, alt}) => {
    return (
        <>
            <ProfileContainer id={id}>
                <ProfileWrapper>
                    <ProfileRow>
                        <Column1>
                            <TextWrapper>
                                <Nome>{nome}</Nome>
                                <Idade>{idade} anos.</Idade>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                         <Img src={img} alt={alt}></Img>
                        </ImgWrap>
                        </Column2>
                    </ProfileRow>
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default Profile

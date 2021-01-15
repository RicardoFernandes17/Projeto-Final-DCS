import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import {
  ProfileContainer,
  ProfileWrapper,
  ProfileRow,
  Column1,
  Column2,
  TextWrapper,
  Nome,
  Idade,
  ImgWrap,
  Img,
} from "./ProfileElements";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (!profileData) {
      getData();
    }
  }, [profileData]);

  const getData = () => {
    axios
      .get("http://localhost:3000/profile", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.getJSON("token")}`,
        },
      })
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    profileData && (
      <ProfileContainer id={profileData.user_id}>
        <ProfileWrapper>
          <ProfileRow>
            <Column1>
              <TextWrapper>
                <Nome>{profileData.user_name}</Nome>
                <Nome>{profileData.user_mail}</Nome>
                {/* <Idade>{idade} anos.</Idade> */}
              </TextWrapper>
            </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2> */}
          </ProfileRow>
        </ProfileWrapper>
      </ProfileContainer>
    )
  );
};

export default Profile;

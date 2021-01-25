import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

export const RouteContainer = styled.div`
  color: #fff;
  background: #000;
  padding-top: 140px;
  padding-bottom: 20px;
`;

export const RouteWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 80%;
  max-width: 1100px;
  grid-row-gap: 10px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  justify-content: center;
  border: 2px solid #d5322c;
  border-radius: 20px;
  margin-bottom: 15px;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  margin: auto;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Img = styled.img`
  height: 500px;
  max-height: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  max-width: 100%;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Name = styled.h1`
  color: #d5322c;
  display: flex;
  justify-content: center;
  font-size: 44px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const City = styled.p`
  color: #fff;
  font-size: 32px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-left: 16px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Creator = styled.p`
  color: #fff;
  font-size: 32px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CreatorLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
`;

export const RatingValue = styled.h3`
  color: #fff;
  font-size: 32px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const RatingCount = styled.h3`
  color: #fff;
  font-size: 32px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

/* export const StarBtn = styled.button`
    cursor: pointer;
    background-color: #000000;
    border: none;
    outline: none;
    margin-left: 6px;
    margin-right: 6px;
` */

export const StarIcon = styled(FaStar)`
  cursor: pointer;
  color: ${({ filled }) => (filled ? 'yellow' : '#fff')};

  font-size: 30px;

  &:hover {
    color: yellow;
    opacity: 0.6;
  }
`;

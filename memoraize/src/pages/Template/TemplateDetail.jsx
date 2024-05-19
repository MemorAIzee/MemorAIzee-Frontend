import styled from 'styled-components';
import Profile from '../../assets/images/profilepicture.png';
import Logo from '../../assets/images/memorizelogo.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../../components/Map/Map';
import Homes from '../../components/Map/Homes';
import Image from '../../assets/images/albumimage.png';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import keyframes from 'styled-components';
import { motion } from 'framer-motion';
import Backbutton from '../../assets/images/arrow-left2.png';

const slideUp = keyframes`
  0% {
    transform: translateY(100%); // 아래에서 시작
    opacity: 0;
  }
  100% {
    transform: translateY(0); // 최종 위치로
    opacity: 1;
  }
`;

const popUp = keyframes`
  from {
    transform: translateY(20px); // 아래에서 시작
    opacity: 0; // 투명에서 시작
  }
  to {
    transform: translateY(0); // 원래 위치로 이동
    opacity: 1; // 완전 불투명
  }
`;

const MainConatiner = styled.div`
  width: 100%;
  height: 1000%;
  background-color: ${(props) => props.bgColor};
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeaderContainer = styled.div`
  width: 97%;
  height: 3vw;
  margin-top: 1.5vw;
  display: flex;
  margin-left: auto; // 왼쪽 마진 자동 조정
  margin-right: auto;
  flex-direction: row;
  justify-content: space-between; /* 양쪽 끝으로 요소를 밀어냄 */
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6vw;
`;

const Profilep = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.2vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;

const Infop = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 0.8vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1vw;
  /* background-color: red; */
  justify-content: center;
  text-align: center;
`;

const Texts = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.8vw;
  font-style: italic;
  font-weight: 500;
  line-height: 1vw; /* 124.878% */

  /* background-color: red; */
`;

const Texts2 = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.3vw;
  font-style: italic;
  font-weight: 200;
  line-height: 1.8vw;
  white-space: normal; /* 줄바꿈을 정상적으로 처리 */
  word-wrap: break-word; /* 긴 단어가 있을 때 줄바꿈 처리 */
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 80%;
  /* background-color: yellow; */
  margin-left: 20vw;
  text-align: center;
  justify-content: center;
`;

const BodyContainer = styled.div`
  width: 55%;
  height: 1000%;

  display: flex;
  margin-left: 20vw;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: red; */
`;

const LocationName = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.3vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;

const LocationNames = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.3vw;
  font-style: italic;
  font-weight: 300;
  line-height: 2vw;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1vw;
  padding-right: 1vw;

  height: 3vw;
  text-align: center;
  align-items: center;
  width: 100%;
`;

const TravelContainer = styled.div`
  width: 100%;
  height: 30vw;
  position: relative;
  overflow: hidden;
`;

const OverlayButton = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 6vw;
  height: 2.5vw;
  text-align: center;

  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.7); // 반투명 흰색 배경
  border-radius: 1vw;
  text-decoration: none;
  color: black;
  font-weight: 300;
  font-size: 1vw;
`;

const ContentContainer = styled.div`
  margin-top: 5vw;
  /* background-color: purple; */
  width: 100%;
  max-height: 15vw;
`;

const ImageContainer2 = styled.div`
  margin-top: 5vw;
  width: 100%;
  height: 30vw;
  /* background: blue; */
  margin-right: 3vw;
  margin-bottom: 10vw;
`;

const InforContainer = styled.div`
  /* background-color: gray; */
  margin-top: 5vw;
  padding-top: 2vw;
  margin-right: 2vw;
  width: 20%;
`;

const DetailTexts = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;

const DetailtextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 3vw;
  gap: 0.5vw;
`;

const ExplainContainer = styled.div`
  margin-bottom: 1vw;
  text-align: left;
`;

const StyledDetailText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function adjustColor(hex, saturationPercentage, lightnessPercentage) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // RGB를 HSL로 변환
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // 채도와 명도 조정
  s *= saturationPercentage;
  s = Math.max(0, Math.min(1, s)); // 채도가 0과 1 사이의 값이 되도록 제한
  l *= lightnessPercentage;
  l = Math.max(0, Math.min(1, l)); // 명도가 0과 1 사이의 값이 되도록 제한

  // HSL을 문자열로 변환
  return `hsl(${(h * 360).toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(
    l * 100
  ).toFixed(1)}%)`;
}

const TemplateDetail = () => {
  const [album, setAlbum] = useState(null);
  const { photoId } = useParams();
  const [backgroiundColor, setBackgroundColor] = useState('RGB(243, 246, 254)');

  const DetailText = ({ dateString }) => {
    // ISO 문자열을 Date 객체로 변환
    const date = new Date(dateString);

    // 한국 시간대로 설정하면서 날짜와 시간 형식을 조정
    const formattedDate = date
      .toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric', // 년도는 네 자리 숫자로 표시
        month: 'long', // 월은 긴 이름으로 표시
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      .replace('일', '일 ')
      .replace(/시/, '시 ')
      .replace(/분/, '분 ');

    return <StyledDetailText>{formattedDate}</StyledDetailText>;
  };

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch(
          `https://api.memoraize.kr/api/photo/${photoId}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlbum(data.result);
        const color = adjustColor(data.result.photo_color_code, 0.3, 1.5); // 채도 50%
        setBackgroundColor(color);
        setBackgroundColor(color);
        console.log(data);
      } catch (e) {
        console.error('Failed to fetch album data:', e);
      }
    };

    fetchData();
  }, [photoId]);

  return (
    <>
      <MainConatiner bgColor={backgroiundColor}>
        <HeaderContainer>
          <ImageContainer>
            <img src={Backbutton} style={{ width: '1.6vw', height: '1.6vw' }} />
          </ImageContainer>
          <img src={Logo} style={{ width: '4vw', height: '4vw' }} />
        </HeaderContainer>

        {album && (
          <>
            <BodyContainer>
              <TextContainer>
                <Texts>{album.photo_title || 'No title'}</Texts>
              </TextContainer>

              <ContentContainer>
                <Texts2>{album.photo_comment}</Texts2>
              </ContentContainer>
            </BodyContainer>

            <ColumnContainer>
              <ImageContainer2>
                <img
                  src={album.photo_url}
                  style={{ width: '100%', height: '100%', borderRadius: '1vw' }}
                />
              </ImageContainer2>
              <InforContainer>
                <DetailtextContainer>
                  <ExplainContainer>
                    <LocationNames>Location:</LocationNames>
                    <DetailTexts>
                      {album.location.place_name || 'Unknown Location'}
                    </DetailTexts>
                  </ExplainContainer>
                  <ExplainContainer>
                    <LocationNames>Date:</LocationNames>
                    <DetailText dateString={album.location.date} />
                  </ExplainContainer>
                  <ExplainContainer>
                    <LocationNames>Hash Tags:</LocationNames>
                    <DetailTexts>{album.hashTage_list.hashtag_id}</DetailTexts>
                  </ExplainContainer>
                </DetailtextContainer>
              </InforContainer>
            </ColumnContainer>
          </>
        )}
      </MainConatiner>
    </>
  );
};

export default TemplateDetail;

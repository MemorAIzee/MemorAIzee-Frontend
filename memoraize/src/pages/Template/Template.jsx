import styled from 'styled-components';
import Profile from '../../assets/images/profilepicture.png';
import Logo from '../../assets/images/memorizelogo.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../../components/Map/Map';
import Homes from '../../components/Map/Homes';
import Image from '../../assets/images/albumimage.png';

const MainConatiner = styled.div`
  width: 100%;
  height: 100vw;
  background-color: RGB(243, 246, 254);
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const MapContainer = styled.div`
  width: 60%;
  margin-top: 8.4vw;
  height: 23.5%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin-left: 10vw;
  background-color: yellow;

  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AlbumContainer = styled.div`
  width: 100%;
  margin-top: 8.4vw;
  height: 35%;
  border-radius: 10px;
  display: flex;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const AlbumText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1vw;
  font-style: italic;
  font-weight: 300;
  margin-left: 3vw;
  line-height: 1vw;
  text-align: left; // 텍스트를 왼쪽으로 정렬
  justify-content: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  width: 15%;
  background-color: red;
  align-items: center; // 내부 텍스트 중앙 정렬
  justify-content: flex-start;
  text-align: left;
  padding: 0 20px; // 텍스트 주변 여백
`;

const WholeAlbumContainer = styled.div`
  width: 100%;
  height: 35%;
  background-color: green;
  margin-top: 5vw;
`;

const Template = () => {
  return (
    <>
      <MainConatiner>
        <HeaderContainer>
          <ImageContainer>
            <img src={Profile} style={{ width: '3vw', height: '3vw' }} />
            <Profilep>SAM</Profilep>
          </ImageContainer>
          <img src={Logo} style={{ width: '4vw', height: '4vw' }} />
        </HeaderContainer>

        <MapContainer>
          <Wrapper apiKey={'AIzaSyCCj7ac4-Bxa9ILiW4DgfjSxxX8NgKeiHw'}>
            <Homes></Homes>
          </Wrapper>
        </MapContainer>

        <WholeAlbumContainer></WholeAlbumContainer>
      </MainConatiner>
    </>
  );
};

export default Template;

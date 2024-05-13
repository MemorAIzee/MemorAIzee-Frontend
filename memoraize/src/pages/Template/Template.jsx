import styled from 'styled-components';
import Profile from '../../assets/images/profilepicture.png';
import Logo from '../../assets/images/memorizelogo.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../../components/Map/Map';
import Homes from '../../components/Map/Homes';
import Image from '../../assets/images/albumimage.png';
import { useEffect, useState } from 'react';

const MainConatiner = styled.div`
  width: 100%;
  height: 1000%;
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

const Infop = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 0.8vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1.2vw;
`;
const MapContainer = styled.div`
  width: 60%;
  margin-top: 8.4vw;
  height: 23.5vw;
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
  /* background-color: red; */
  align-items: center; // 내부 텍스트 중앙 정렬
  justify-content: flex-start;
  text-align: left;
  padding: 0 20px; // 텍스트 주변 여백
`;

const WholeAlbumContainer = styled.div`
  width: 100%;
  height: 35vw;
  justify-content: flex-end;
  /* background-color: green; */
  margin-top: 5vw;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ImagesContainer = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: yellow; */
`;

const TextsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4.5vw;
  width: 10vw;
  /* background-color: yellow; */
  gap: 1vw;
  flex-direction: column;
`;
const Texts = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1vw;
  font-style: italic;
  font-weight: 300;
  line-height: 1vw; /* 124.878% */
  margin-right: 1vw;
  /* background-color: red; */
`;

const Texts2 = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 13.453px;
  font-style: italic;
  font-weight: 200;
  line-height: 16.8px; /* 124.878% */
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
`;

const albums = [
  { title: 'Alpine Adventures', location: 'Innsbruck, Austria', image: Image },
  {
    title: 'hello',
    location: 'Innsbruck, Austffssfa',
    image: Image,
  },
  {
    title: 'Alpine Adventudsffsfs',
    location: 'New York, USA',
    image: Image,
  },
];

//albumId = 13

const Template = () => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('https://api.memoraize.kr/api/album/14', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlbum(data.result);
        console.log(data);
      } catch (e) {
        console.error('Failed to fetch album data:', e);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <MainConatiner>
        <HeaderContainer>
          <ImageContainer>
            <img src={Profile} style={{ width: '3vw', height: '3vw' }} />
            <ColumnContainer>
              {album && <Profilep>{album.album_title}</Profilep>}
              {album && <Infop>{album.album_info}</Infop>}
            </ColumnContainer>
          </ImageContainer>
          <img src={Logo} style={{ width: '4vw', height: '4vw' }} />
        </HeaderContainer>

        <MapContainer>
          <Wrapper apiKey={'AIzaSyCCj7ac4-Bxa9ILiW4DgfjSxxX8NgKeiHw'}>
            <Homes></Homes>
          </Wrapper>
        </MapContainer>

        {album?.photo_list?.map((photo, index) => (
          <WholeAlbumContainer key={index}>
            <ImagesContainer>
              <img
                src={photo.photo_url}
                style={{ width: '100%', height: '100%' }}
              />
            </ImagesContainer>
            <TextsContainer>
              <Texts>
                {photo.location?.place_name} <br />
              </Texts>
              <Texts>{photo.location?.date?.split('T')[0]}</Texts>
            </TextsContainer>
          </WholeAlbumContainer>
        ))}
      </MainConatiner>
    </>
  );
};

export default Template;

import Header from '../../components/Header/Header';
import styled from 'styled-components';
import RevieweBanner from '../../assets/images/Writereviewbanner.png';
import Review from '../../components/Review/Review';
import Reviewrec from '../../assets/images/reviewrec.png';
import Location from '../../assets/images/Location on.png';
import Time from '../../assets/images/Access time.png';
import Call from '../../assets/images/Call.png';
import ETC from '../../assets/images/More horiz.png';
import Map from '../../components/Map/Map';
import { useParams } from 'react-router-dom';
import LeftButtonImage from '../../assets/images/leftbutton.png';
import RightButtonImage from '../../assets/images/rightbutton.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Homes from '../../components/Map/Homes';

const LeftButton = styled.img`
  flex-shrink: 0;
  width: 3.9vw;
  height: 3.9vw;
  position: absolute;
  left: -2.7%;
  top: 50%;
  transform: translateY(-50%);
`;
const RightButton = styled.img`
  position: absolute;
  right: -2.7%;
  top: 50%;
  transform: translateY(-50%);
  width: 3.9vw;
  height: 3.9vw;
`;

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 27vw;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 7.65vw;
  margin-bottom: 7.5vw;
  height: 75vw;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 7.6vw;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  /* padding-top: 1.2vw;
  padding-left: 2.35vw; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6vw;
  padding-top: 1.2vw;
  padding-left: 2.35vw;
  /* align-items: flex-start; */
`;

const PlacePicture = styled.img`
  width: 20vw;
  height: 20vw;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const InfoText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InfoIcon = styled.img`
  width: 1.6vw;
  height: 1.6vw;
`;

// InfoItem 컴포넌트 정의
const InfoItemComponent = ({ icon, text }) => (
  <InfoItem>
    <InfoIcon src={icon} />
    <InfoText>{text}</InfoText>
  </InfoItem>
);

const TravelContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

const Travelo = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Detailreview = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <BannerContainer>
        <ImgContainer>
          <LeftButton src={LeftButtonImage} alt="Left Button" />
          <img src={RevieweBanner} style={{ width: '100%', height: '27vw' }} />
          <RightButton src={RightButtonImage} alt="Right Button" />
        </ImgContainer>
      </BannerContainer>
      <Container>
        <CreatesContainer>
          <RowContainer>
            <PlacePicture src={Reviewrec} />
            <RowsContainer>
              <ColumnContainer>
                <InfoItemComponent
                  icon={Location}
                  text="서울특별시 성동구 연무장 7가길 2 1층"
                />
                <InfoItemComponent icon={Time} text="오후 9:30에 영업 종료" />
                <InfoItemComponent icon={Call} text="010-5803-0672" />
                <InfoItemComponent icon={ETC} text="G3V3+6v 서울특별시" />
              </ColumnContainer>
            </RowsContainer>
          </RowContainer>

          <TravelContainer>
            <Travelo>리뷰</Travelo>
          </TravelContainer>
          <Review />
        </CreatesContainer>

        <Wrapper apiKey={'AIzaSyCCj7ac4-Bxa9ILiW4DgfjSxxX8NgKeiHw'}>
          <Homes></Homes>
        </Wrapper>
      </Container>
    </>
  );
};

export default Detailreview;

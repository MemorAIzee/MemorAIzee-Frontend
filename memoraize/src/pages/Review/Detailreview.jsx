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

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
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
  return (
    <>
      <Header />
      <BannerContainer>
        <img src={RevieweBanner} style={{ width: '100%', height: '27vw' }} />
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
          <Map apiKey="AIzaSyCCj7ac4-Bxa9ILiW4DgfjSxxX8NgKeiHw" />
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Detailreview;

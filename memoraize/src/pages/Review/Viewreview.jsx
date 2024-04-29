import Header from '../../components/Header/Header';
import styled from 'styled-components';
import RevieweBanner from '../../assets/images/ReviewBanner.png';
import Review from '../../components/Review/Review';
import { Link } from 'react-router-dom';

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
  height: 50vw;
  align-items: center;
`;

const ButtonContainerWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1vw;
`;

const NewButton = styled.button`
  display: inline-flex;
  padding: 1vw 2vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 2.5vw;
  background: #0034ed;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PopularButton = styled.button`
  display: inline-flex;
  padding: 1vw 2vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 2.5vw;
  border: 1px solid #0034ed;
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Viewreview = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <img src={RevieweBanner} style={{ width: '100%', height: '27vw' }} />
      </BannerContainer>
      <Container>
        <CreatesContainer>
          <ButtonContainerWrapper>
            <ButtonContainer>
              <NewButton>New</NewButton>
              <PopularButton>Popular</PopularButton>
            </ButtonContainer>
          </ButtonContainerWrapper>

          <Review />
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Viewreview;

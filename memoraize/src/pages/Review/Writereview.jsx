import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Banner from '../../assets/images/Writereviewbanner.png';
import Star from '../../assets/images/reviewstar.png';
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
  justify-content: flex-start;
  width: 58%;
  margin-top: 7.65vw;
  margin-bottom: 7.5vw;
  background-color: yellow;
  height: 25vw;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.05vw;
  width: 100%;
`;

const ContentP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Titlefield = styled.input`
  width: 45.8vw;
  height: 3.2vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
`;
const Writereview = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <img src={Banner} style={{ width: '100%', height: '27vw' }} />
      </BannerContainer>

      <Container>
        <CreatesContainer>
          <ContentContainer>
            <ContentP>Rating</ContentP>
            <img src={Star} style={{ width: '12.2vw', height: '1.8vw' }} />
          </ContentContainer>
          <ContentContainer style={{ gap: '9.45vw' }}>
            <ContentP>Title</ContentP>
            <Titlefield placeholder="제목을 입력해주세요"></Titlefield>
          </ContentContainer>
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Writereview;

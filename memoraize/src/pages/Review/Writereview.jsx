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
  align-items: center;
`;

const ContentP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Contenttitle = styled.p`
  margin-bottom: 1.7vw;
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

const RequireText = styled.p`
  text-align: left;
  margin-top: 1vw;
  color: var(--5, #707070);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ReviewContentContainer = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const ReviewP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
          <ContentContainer style={{ marginBottom: '4.2vw' }}>
            <ContentP>Rating</ContentP>
            <img src={Star} style={{ width: '12.2vw', height: '1.8vw' }} />
          </ContentContainer>

          <ContentContainer style={{ gap: '9.45vw', alignItems: 'center' }}>
            <Contenttitle>Title</Contenttitle>
            <FieldContainer>
              <Titlefield placeholder="제목을 입력해주세요" />
              <RequireText>* 최대 50자 이내</RequireText>
            </FieldContainer>
          </ContentContainer>

          <ReviewContentContainer>
            <ReviewP>Content</ReviewP>
          </ReviewContentContainer>
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Writereview;

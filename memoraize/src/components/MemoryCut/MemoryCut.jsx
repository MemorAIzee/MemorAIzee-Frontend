import styled from 'styled-components';
import MemoryCutImage from '../../assets/images/MemoryCutimage.png';

const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 자식 요소들을 가운데 정렬 */
  overflow: hidden; /* 하단 넘치는 부분 숨김 */
  height: 43.95vw;
  position: relative; /* 자식의 절대 위치 기준점 설정 */
`;

const HalfCircle = styled.div`
  border-radius: 100% 100% 0 0;
  opacity: 0.08;
  background: var(--2, #5e81ff);
  width: 200%; /* 반원의 너비를 확장하여 전체 배경으로 사용 */
  height: 87.9vw; /* 반원의 높이를 늘려 전체 배경으로 사용 */
  position: absolute;
  top: 0;
  left: -50%; /* 너비 확장에 따른 위치 조정 */
  z-index: -1; /* CreatesContainer 아래에 위치하도록 z-index 설정 */
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%; /* 원래 너비 유지 */
  height: 89vw; /* 필요한 높이 설정 */
  align-items: center; /* 내부 요소 중앙 정렬 */
  position: relative;
  z-index: 1;
  margin-top: 10.95vw;
`;

const MemoryCutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const MemoryCutP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 1.8vw;
`;

const AllButton = styled.button`
  width: 10vw;
  height: 3vw;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--2, #5e81ff);
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4vw;
`;

const MemoryCut = () => {
  return (
    <>
      <BackgroundContainer>
        <HalfCircle />
        <CreatesContainer>
          <MemoryCutContainer>
            <ColumnContainer>
              <MemoryCutP>Memory Cut</MemoryCutP>
              <AllButton>View All Memory</AllButton>
            </ColumnContainer>
            <ImageContainer>
              <img
                src={MemoryCutImage}
                style={{ width: '18.5vw', height: '26vw' }}
              />
              <img
                src={MemoryCutImage}
                style={{ width: '18.5vw', height: '26vw' }}
              />
            </ImageContainer>
          </MemoryCutContainer>
        </CreatesContainer>
      </BackgroundContainer>
    </>
  );
};

export default MemoryCut;

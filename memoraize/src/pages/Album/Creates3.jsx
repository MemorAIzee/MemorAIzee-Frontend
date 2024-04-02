import styled from 'styled-components';
import Header from '../../components/Header/Header';
import CreateBanner from '../../assets/images/CreateBanner.png';
import CircleLine from '../../assets/images/creates3.png';
import { useNavigate } from 'react-router-dom';
import Photocamera from '../../assets/images/Photo camera.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 5.4vw;
  margin-bottom: 7.5vw;
  height: 25vw;
  align-items: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const NameText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CreateContainer = styled.div`
  margin-top: 7.5vw;
  display: flex;
  flex-direction: column;
`;

const PhotoAddContainer = styled.div`
  width: 42.4vw;
  height: 3.2vw;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
  margin-top: 1.6vw;
  color: var(--3, #a0a0a0);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0.8vw 0 1.2vw;
  margin-bottom: 1vw;
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽 요소 사이에 공간을 균등하게 분배 */
  align-items: center;
`;

const PhotoIcon = styled.img`
  cursor: pointer; /* 클릭 가능한 아이콘 표시 */
  width: 1.6vw;
  height: 1.6vw;
`;

const AlbumField = styled.input``;

const RequiredText = styled.p`
  color: var(--5, #707070);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.5vw;
`;

const CancelButton = styled.button`
  width: 7vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  background: var(--2, #e1e1e1);
  color: #000;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
`;

const SubmitButton = styled.button`
  width: 7vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  background: #5e81ff;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 4.5vw;
`;

const PhotoSelectText = styled.p`
  color: var(--3, #a0a0a0);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Creates3 = () => {
  const navigate = useNavigate();

  const goToCreates2 = () => {
    navigate('/creates2');
  };

  const goToCreates4 = () => {
    navigate('/Creates4');
  };
  const triggerFileSelect = () => {
    document.getElementById('photoUpload').click();
  };

  return (
    <>
      <Header />
      <BannerContainer>
        <img src={CreateBanner} style={{ width: '100%', height: '27vw' }} />
      </BannerContainer>
      <Container>
        <CreatesContainer>
          <img src={CircleLine} style={{ width: '42.4vw', height: '1.6vw' }} />
          <CreateContainer>
            <NameText>사진 추가하기</NameText>
            <PhotoAddContainer>
              <PhotoSelectText>사진을 선택해주세요</PhotoSelectText>
              <PhotoIcon src={Photocamera} onClick={triggerFileSelect} />
              <HiddenFileInput type="file" id="photoUpload" accept="image/*" />
            </PhotoAddContainer>
          </CreateContainer>
          <ButtonContainer>
            <CancelButton onClick={goToCreates2}>취소하기</CancelButton>
            <SubmitButton onClick={goToCreates4}>다음으로</SubmitButton>
          </ButtonContainer>
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Creates3;

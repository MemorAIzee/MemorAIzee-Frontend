import styled from 'styled-components';
import Header from '../../components/Header/Header';
import CreateBanner from '../../assets/images/CreateBanner.png';
import CircleLine from '../../assets/images/CircleLine.png';
import { useNavigate } from 'react-router-dom';
import Photocamera from '../../assets/images/Photo camera.png';
import { useState } from 'react';
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
  background: #0034ed;
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

const ShareSelect = styled.select`
  width: 42.4vw;
  height: 3.2vw;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  padding: 0 0.8vw 0 1.2vw;
  margin-top: 1.6vw; /* 상단 여백 */
  margin-bottom: 1vw; /* 하단 여백 */
  appearance: none; /* 기본 화살표 제거 */
  background: #f7f7f7
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='11' viewBox='0 0 16 11' fill='none'%3E%3Cpath d='M1.88 0L8 6.19788L14.12 0L16 1.90808L8 10.0276L0 1.90808L1.88 0Z' fill='%23707070'/%3E%3C/svg%3E")
    no-repeat right 1vw center;
`;
const DropdownContainer = styled.div`
  position: relative;
  width: 42.4vw;
  margin-top: 1.6vw;
  margin-bottom: 1vw;
`;

const DropdownButton = styled.div`
  width: 100%;
  height: 3.2vw;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background: #f7f7f7;
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  padding: 0 0.8vw 0 1.2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f7f7f7
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='11' viewBox='0 0 16 11' fill='none'%3E%3Cpath d='M1.88 0L8 6.19788L14.12 0L16 1.90808L8 10.0276L0 1.90808L1.88 0Z' fill='%23707070'/%3E%3C/svg%3E")
    no-repeat right 1vw center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 42.4vw;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.div`
  padding: 10px 1.2vw;
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ShareOption = styled.option``;

const Creates4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedShareOption, setSelectedShareOption] = useState('모두에게'); // 기본값 설정

  const navigate = useNavigate();

  const goToCreates3 = () => {
    navigate('/creates3');
  };

  const triggerFileSelect = () => {
    document.getElementById('photoUpload').click();
  };

  const handleSelectShareOption = (option) => {
    setSelectedShareOption(option); // 선택된 공유 범위 업데이트
    setIsOpen(false); // 드롭다운 메뉴 닫기
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
            <NameText>앨범 공유 범위</NameText>
            <DropdownContainer>
              <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedShareOption}</span>{' '}
              </DropdownButton>
              {isOpen && (
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => handleSelectShareOption('친구끼리')}
                  >
                    친구끼리
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleSelectShareOption('나만보기')}
                  >
                    나만보기
                  </DropdownItem>
                </DropdownMenu>
              )}
            </DropdownContainer>
          </CreateContainer>
          <ButtonContainer>
            <CancelButton onClick={goToCreates3}>취소하기</CancelButton>
            <SubmitButton>다음으로</SubmitButton>
          </ButtonContainer>
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Creates4;

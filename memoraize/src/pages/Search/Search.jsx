import Header from '../../components/Header/Header';
import SearchBanner from '../../assets/images/searchbanner.png';
import styled from 'styled-components';
import RowLine from '../../assets/images/Vector 213.png';
import Titleimage from '../../assets/images/titleimage.png';
import { useState } from 'react';

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 6.85vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1vw;
  gap: 6vw;
`;

const Text = styled.p`
  color: ${(props) => (props.isSelected ? '#000' : 'var(--5, #707070)')};
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4vw;
  margin-left: 1.8vw;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 42vw;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-top: 2.4vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const TitleP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IdP = styled.p`
  color: var(--5, #707070);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SearchData = {
  title: [
    { text: '애월읍 한라봉 최고 맛집', id: '@hanlabong' },
    { text: '감귤의 품격-애월읍', id: '@mandarin-king' },
    { text: '애월읍 위니브 감귤농장', id: '@hanlabong' },
    { text: '애월읍 둘레길', id: '@jeju-sanchek' },
    { text: '애월읍 휘뚜루마뚜루 부이르고', id: '@dailyjeju' },
  ],
  tag: [
    { text: '제주여행', id: '#jeju' },
    { text: '맛집탐방', id: '#foodie' },
    { text: '감귤사랑', id: '#citrus' },
    { text: '자연산책', id: '#naturewalk' },
    { text: '일상여행', id: '#dailytravel' },
  ],
  user: [
    { text: '제주도민 박사장', id: '@jeju-park' },
    { text: '감귤박사 이모씨', id: '@citrus-lee' },
    { text: '여행작가 김씨', id: '@travel-kim' },
    { text: '자연주의자 최씨', id: '@nature-choi' },
    { text: '데일리 블로거 정씨', id: '@daily-jung' },
  ],
  place: [
    { text: '성산일출봉', id: '@seongsan' },
    { text: '제주 올레길', id: '@jeju-olle' },
    { text: '한라산 국립공원', id: '@hallasan' },
    { text: '천지연 폭포', id: '@cheonjiyeon' },
    { text: '우도', id: '@udo' },
  ],
};

const TextContainer = styled.div`
  position: relative;
  margin-bottom: 10px; // 선택된 항목과 이미지 사이의 공간 조정
  cursor: pointer;

  // 선택된 항목 아래의 파란색 줄을 추가합니다.
  &::after {
    content: '';
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
    position: absolute;
    bottom: -27.5px; // 하단 테두리 위치 조정
    left: -5px;
    width: 130%;
    border-bottom: 2px solid #5e81ff;
    stroke-width: 3px;
  }
`;

const BannerText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const StyledBannerContainer = styled.div`
  width: 100%;
  height: 27vw;
  background-image: url(${SearchBanner});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextContainer2 = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 2vw;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 58.95vw;
  height: 3vw;
  border-radius: 0.2vw;

  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5vw;
  padding: 0 3vw 0 1vw; /* 좌측 패딩을 조정해 텍스트 입력 영역을 확보하세요. */
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0.4vw;
  width: 1.4vw;
  height: 1.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('title'); // 기본 선택 카테고리

  return (
    <>
      <Header />
      <StyledBannerContainer>
        <TextContainer2>
          <BannerText>Search</BannerText>
          <SearchBarContainer>
            <SearchInput />
            <SearchIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4vw"
                height="1.4vw"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M18.0833 16.3333H17.1617L16.835 16.0183C17.9783 14.6883 18.6667 12.9617 18.6667 11.0833C18.6667 6.895 15.2717 3.5 11.0833 3.5C6.895 3.5 3.5 6.895 3.5 11.0833C3.5 15.2717 6.895 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.17833 16.3333 5.83333 13.9883 5.83333 11.0833C5.83333 8.17833 8.17833 5.83333 11.0833 5.83333C13.9883 5.83333 16.3333 8.17833 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z"
                  fill="black"
                />
              </svg>
            </SearchIcon>
          </SearchBarContainer>
        </TextContainer2>
      </StyledBannerContainer>

      <Container>
        <CreatesContainer>
          <RowContainer>
            <TextContainer
              isSelected={selectedCategory === 'title'}
              onClick={() => setSelectedCategory('title')}
            >
              <Text isSelected={selectedCategory === 'title'}>제목</Text>
            </TextContainer>
            <TextContainer
              isSelected={selectedCategory === 'tag'}
              onClick={() => setSelectedCategory('tag')}
            >
              <Text isSelected={selectedCategory === 'tag'}>태그</Text>
            </TextContainer>
            <TextContainer
              isSelected={selectedCategory === 'user'}
              onClick={() => setSelectedCategory('user')}
            >
              <Text isSelected={selectedCategory === 'user'}>사용자</Text>
            </TextContainer>
            <TextContainer
              isSelected={selectedCategory === 'place'}
              onClick={() => setSelectedCategory('place')}
            >
              <Text isSelected={selectedCategory === 'place'}>장소</Text>
            </TextContainer>
          </RowContainer>

          <img src={RowLine} style={{ width: '59vw' }} alt="Row Line" />
          {SearchData[selectedCategory].map((item, index) => (
            <TitleContainer key={index}>
              <img
                src={Titleimage}
                style={{ width: '5vw', height: '5vw' }}
                alt="Title"
              />
              <ColumnContainer>
                <TitleP>{item.text}</TitleP>
                <IdP>{item.id}</IdP>
              </ColumnContainer>
            </TitleContainer>
          ))}
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Search;

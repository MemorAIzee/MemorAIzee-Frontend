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
  color: #000;
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
  background-color: yellow;
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

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('title'); // 기본 선택 카테고리

  return (
    <>
      <Header />
      <BannerContainer>
        <img
          src={SearchBanner}
          style={{ width: '100%', height: '27vw' }}
          alt="Search Banner"
        />
      </BannerContainer>

      <Container>
        <CreatesContainer>
          <RowContainer>
            <Text onClick={() => setSelectedCategory('title')}>제목</Text>
            <Text onClick={() => setSelectedCategory('tag')}>태그</Text>
            <Text onClick={() => setSelectedCategory('user')}>사용자</Text>
            <Text onClick={() => setSelectedCategory('place')}>장소</Text>
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

import Header from '../../components/Header/Header';
import styled from 'styled-components';
import Profile from '../../assets/images/Rectangle.png';
import Travelog from '../../components/Travelog/Travelog';
import Review from '../../components/Review/Review';
import { useEffect } from 'react';
import { useState } from 'react';

const MypageContainer = styled.div`
  width: 100%;
  height: 22vw;
  background-color: #f5f5f5;
  justify-content: center;

  display: flex;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const UserName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FollowButton = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 4.1vw;
  height: 2vw;
  border-radius: 4px;
  background: var(--2, #5e81ff);
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 0.6vw;
`;

const ProfileIntro = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

const Mypage = () => {
  const [profile, setProfile] = useState({});
  const userId = 'test';

  useEffect(() => {
    const fetchProfile = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch(
          `https://api.memoraize.kr/api/user/profile`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProfile(data.result);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []); // 빈 배열을 의존성 배열로 추가
  return (
    <>
      <Header />

      <MypageContainer>
        <CreatesContainer>
          <RowContainer>
            <img src={Profile} style={{ width: '12vw', height: '12vw' }} />
            <RowContainer
              style={{
                marginTop: '1.25vw',
                marginLeft: '2.4vw',
                justifyContent: 'space-between',
              }}
            >
              <ColumnContainer>
                <UserName>사용자 이름</UserName>
                <RowContainer style={{ marginTop: '1.45vw' }}>
                  <ProfileP>앨범 수</ProfileP>
                  <ProfileP style={{ marginRight: '2vw' }}>15</ProfileP>
                  <ProfileP>팔로워</ProfileP>
                  <ProfileP style={{ marginRight: '2vw' }}>19.8만</ProfileP>
                  <ProfileP>팔로잉</ProfileP>
                  <ProfileP style={{ marginRight: '2vw' }}>239</ProfileP>
                </RowContainer>
                <RowContainer style={{ marginTop: '1vw' }}>
                  <ProfileIntro>
                    사용자 소개 글 입니다. 사용자 소개 글 입니다. 사용자 소개 글
                    입니다. 사용자 소개 글 입니다. 사용자 소개 글 입니다. 사용자
                    소개 글 입니다.사용자 소개 글 입니다.사용자 소개 글
                    입니다.사용자 소개 글 입니다.사용자 소개 글 입니다.사용자
                    소개 글 입니다.사용자 소개 글 입니다.사용자 소개 글
                    입니다.사용자 소개 글 입니다.사용자 소개 글 입니다.사용자
                    소개 글 입니다.사용자 소개 글 입니다.사용자 소개 글
                    입니다.사용자 소개 글 입니다.사용자 소개 글 입니다.사용자
                    소개 글 입니다.사용자 소개 글 입니다.사용자 소개 글
                    입니다.사용자 소개 글 입니다.
                  </ProfileIntro>
                </RowContainer>
              </ColumnContainer>
              <FollowButton>팔로우</FollowButton>
            </RowContainer>
          </RowContainer>
        </CreatesContainer>
      </MypageContainer>

      <Container>
        <Travelog title="My Album" />

        <CreatesContainer style={{ paddingTop: '0vw' }}>
          <TravelContainer>
            <Travelo>My Reviews</Travelo>
          </TravelContainer>
          <Review />
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Mypage;

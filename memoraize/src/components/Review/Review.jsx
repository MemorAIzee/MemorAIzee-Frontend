import styled from 'styled-components';
import reviewprofile from '../../assets/images/reviewprofile.png';
import Fullstar from '../../assets/images/Star rate.png';
import Emptystar from '../../assets/images/Star.png';
import Heartimage from '../../assets/images/heartimage.png';
import review1 from '../../assets/images/reviewimage.png';
import review2 from '../../assets/images/reviewimage1.png';
import review3 from '../../assets/images/reviewimage2.png';
import { Link } from 'react-router-dom';

const ReviewContainer = styled.div`
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  gap: 1.4vw;
`;

const Reviews = styled.div`
  width: 19.05vw;
  height: 22.25vw;
  flex-shrink: 0;
  background: #f7f7f7;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Updated this line */
  padding: 1.6vw 1.2vw 0 1vw;
  width: 100%; /* Ensure the container takes full width */
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* To align the items vertically */
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.55vw;
`;

const UserName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Aligns items to the start and end */
  width: 100%; /* Ensure the container takes full width of its parent */
  margin-top: 0.2vw;
`;

const StyledStar = styled.img`
  width: 0.8vw;
  height: 0.85vw;
`;

const HeartIcon = styled.img`
  width: 1vw;
  height: 0.9vw;
  margin-top: 0.4vw;
`;

const ContentContainer = styled.div`
  padding: 1.3vw 1.35vw 1.3vw 1.4vw;
  display: flex;
  height: 10.8vw;
`;

const ContentText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2vw;
`;

const Reviewimage = styled.img`
  width: 6.2vw;
  height: 7vw;
`;

const Review = () => {
  const reviewContainersData = [
    [1, 2, 3], // First ReviewContainer with three reviews
    [4, 5, 6], // Second ReviewContainer with three reviews
  ];

  const rating = 3;
  const totalStars = 5;

  return (
    <>
      {reviewContainersData.map((container, index) => (
        <ReviewContainer key={index}>
          {container.map((reviewId) => (
            <Link
              to={`/detailReview/${reviewId}`}
              key={reviewId}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              {/* Link 추가 */}
              <Reviews>
                <TitleContainer>
                  <UserInfoContainer>
                    <img
                      src={reviewprofile}
                      style={{ width: '2.75vw', height: '2.75vw' }}
                    />
                    <NameContainer>
                      <UserName>사용자이름</UserName>
                      <StarContainer>
                        {[...Array(totalStars)].map((_, index) => (
                          <StyledStar
                            key={index}
                            src={index < rating ? Fullstar : Emptystar}
                          />
                        ))}
                      </StarContainer>
                    </NameContainer>
                  </UserInfoContainer>
                  <HeartIcon src={Heartimage} />
                </TitleContainer>
                <ContentContainer>
                  <ContentText>
                    경치가 너무 좋고 사람이 없어서 정말 좋았어요!!! 꼭 또 가고
                    싶은 곳입니다!!
                  </ContentText>
                </ContentContainer>

                <ImageContainer>
                  <Reviewimage src={review1} />
                  <Reviewimage src={review2} />
                  <Reviewimage src={review3} />
                </ImageContainer>
              </Reviews>
            </Link>
          ))}
        </ReviewContainer>
      ))}
    </>
  );
};

export default Review;

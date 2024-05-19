import styled from 'styled-components';
import reviewprofile from '../../assets/images/reviewprofile.png';
import Fullstar from '../../assets/images/Star rate.png';
import Emptystar from '../../assets/images/Star.png';
import Heartimage from '../../assets/images/heartimage.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
  justify-content: space-between;
  padding: 1.6vw 1.2vw 0 1vw;
  width: 100%;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  justify-content: space-between;
  width: 100%;
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

const MyReview = ({ page = 1, pageCount = 10 }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const authToken = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId'); // sessionStorage에서 userId 가져오기

      if (!userId) {
        console.error('No userId found in sessionStorage');
        return;
      }

      try {
        const response = await fetch(
          `https://api.memoraize.kr/api/reviews/users?userId=${userId}&page=${page}&pageCount=${pageCount}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch reviews with status: ${response.status}`
          );
        }

        const data = await response.json();
        setReviews(data.result.reviewList || []);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [page, pageCount]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewContainer key={review.reviewId}>
            <Link
              to={`/detailReview/${review.reviewId}`}
              style={{ textDecoration: 'none' }}
            >
              <Reviews>
                <TitleContainer>
                  <UserInfoContainer>
                    <img
                      src={review.writer.user_image_url || reviewprofile}
                      alt="User Profile"
                      style={{ width: '2.75vw', height: '2.75vw' }}
                    />
                    <NameContainer>
                      <UserName>{review.writer.user_name}</UserName>
                      <StarContainer>
                        {[...Array(5)].map((_, index) => (
                          <StyledStar
                            key={index}
                            src={index < review.star ? Fullstar : Emptystar}
                          />
                        ))}
                      </StarContainer>
                    </NameContainer>
                  </UserInfoContainer>
                  <HeartIcon src={Heartimage} />
                </TitleContainer>
                <ContentContainer>
                  <ContentText>{review.content}</ContentText>
                </ContentContainer>

                <ImageContainer>
                  {review.reviewImages.map((image, index) => (
                    <Reviewimage
                      key={index}
                      src={image}
                      alt={`Review Image ${index + 1}`}
                    />
                  ))}
                </ImageContainer>
              </Reviews>
            </Link>
          </ReviewContainer>
        ))
      ) : (
        <p>No reviews found</p>
      )}
    </>
  );
};

export default MyReview;

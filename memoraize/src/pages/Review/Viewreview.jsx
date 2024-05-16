import Header from '../../components/Header/Header';
import styled from 'styled-components';
import RevieweBanner from '../../assets/images/ReviewBanner.png';
import Review from '../../components/Review/Review';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import arrowIcon from '../../assets/images/arrow_12px2.png';

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const PaginationImg = styled.img`
  width: 1.25vw;
  height: 1.25vw;
  margin-right: 1.25vw;
`;
const PaginationImg2 = styled.img`
  width: 1.25vw;
  height: 1.25vw;
  transform: rotate(180deg);
  margin-left: 1.25vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 7.65vw;
  margin-bottom: 7.5vw;
  height: 50vw;
  align-items: center;
`;

const ButtonContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1vw;
`;

const NewButton = styled.button`
  display: inline-flex;
  padding: 1vw 2vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 2.5vw;
  background: #0034ed;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PopularButton = styled.button`
  display: inline-flex;
  padding: 1vw 2vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 2.5vw;
  border: 1px solid #0034ed;
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FollowButton = styled.button`
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--2, #5e81ff);
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw; /* 150% */
`;

const PaginationContainer = styled.div`
  margin-top: 3.4375vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationNumber = styled.div`
  display: inline-flex;
  margin-right: 1.3021vw;
  padding: 0.2083vw;
  justify-content: center;
  align-items: center;
  color: var(--Gray-Gray-700, #464a4d);
  text-align: center;

  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 0.9375vw */
  letter-spacing: -0.0187vw;

  &:active {
    border-radius: 5.2083vw;
    background: var(--Primary-Red-200, #fff6f7);
    color: var(--Primary-Red-900, #e95458);
    text-align: center;
    font-family: Inter;
    font-size: 0.625vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Button = styled.button`
  display: inline-flex;
  padding: 1vw 2vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 2.5vw;
  border: 1px solid #0034ed;
  background: ${(props) => (props.active ? '#0034ed' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PaginationComponent = ({ page, totalPages, handlePageChange }) => {
  return (
    <PaginationContainer>
      {page > 1 && (
        <PaginationImg
          src={arrowIcon}
          alt="Prev Page"
          onClick={() => handlePageChange(page - 1)}
        />
      )}

      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationNumber
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          style={{
            fontWeight: page === i + 1 ? 'bold' : 'normal',
          }}
        >
          {i + 1}
        </PaginationNumber>
      ))}

      {page < totalPages && (
        <PaginationImg2
          src={arrowIcon}
          alt="Next Page"
          onClick={() => handlePageChange(page + 1)}
        />
      )}
    </PaginationContainer>
  );
};

const Viewreview = () => {
  const navigate = useNavigate();

  const [sortStatus, setSortStatus] = useState('_POPULAR');
  const [page, setPage] = useState(1); // 페이지 번호
  const [pageCount, setPageCount] = useState(6);

  const [reviews, setReviews] = useState([]); // State to hold review data
  const [totalPages, setTotalPages] = useState(0); // Total number of pages from API

  const MakeReview = () => {
    navigate('/Writereview');
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem('authToken');
      const url = new URL('https://api.memoraize.kr/api/reviews');
      const params = { sortStatus, page, pageCount };
      url.search = new URLSearchParams(params).toString();

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setReviews(data);
        setTotalPages(data.totalPages); // Assuming the API provides this data
      } catch (e) {
        console.error('Failed to fetch reviews:', e);
      }
    };

    fetchData();
  }, [sortStatus, page, pageCount]);

  return (
    <>
      <Header />
      <BannerContainer>
        <img src={RevieweBanner} style={{ width: '100%', height: '27vw' }} />
      </BannerContainer>
      <Container>
        <CreatesContainer>
          <ButtonContainerWrapper>
            <ButtonContainer>
              <Button
                active={sortStatus === '_POPULAR'}
                onClick={() => setSortStatus('_POPULAR')}
              >
                Popular
              </Button>
              <Button
                active={sortStatus === '_LATEST'}
                onClick={() => setSortStatus('_LATEST')}
              >
                New
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <FollowButton onClick={() => MakeReview()}>
                리뷰 쓰기
              </FollowButton>
            </ButtonContainer>
          </ButtonContainerWrapper>
          {/* 
          <Review reviews={reviews} /> */}

          {totalPages > 0 && ( // 조건 추가
            <PaginationComponent
              page={page}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </CreatesContainer>
      </Container>
    </>
  );
};

export default Viewreview;

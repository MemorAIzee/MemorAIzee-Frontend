import styled from 'styled-components';
import Travel from '../../assets/images/Travelogimage.png';
import Share from '../../assets/images/share.png';

const TravelContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

const CreatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 7.65vw;
  margin-bottom: 7.5vw;
  height: 72vw;
  align-items: center;
`;

const Travelo = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AlbumContainer = styled.div`
  margin-top: 2.4vw;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  flex-wrap: wrap;
`;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  width: calc((100% - 4.4vw) / 3);
`;

const Detail = styled.div`
  width: 18.5vw;
  height: 7.4vw;
  flex-shrink: 0;
  background: #f5f5f5;
  padding: 1.6vw 1.4vw 0.85vw 1.3vw;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 21vw;
`;

const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Made = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.3vw;
  margin-bottom: 1.3vw;
`;

const HashTag = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
`;

const AlbumData = [
  { id: 1, title: '앨범제목 1', date: '생성일 1', hashtag: '#해시태그1' },
  { id: 2, title: '앨범제목 2', date: '생성일 2', hashtag: '#해시태그2' },
  { id: 3, title: '앨범제목 3', date: '생성일 3', hashtag: '#해시태그3' },
  { id: 4, title: '앨범제목 4', date: '생성일 4', hashtag: '#해시태그4' },
  { id: 5, title: '앨범제목 5', date: '생성일 5', hashtag: '#해시태그5' },
  { id: 6, title: '앨범제목 6', date: '생성일 6', hashtag: '#해시태그6' },
];

const Travelog = ({ title = 'Travelog' }) => {
  return (
    <>
      <CreatesContainer>
        <TravelContainer>
          <Travelo>{title}</Travelo>
        </TravelContainer>
        <AlbumContainer>
          {AlbumData.map((album) => (
            <Album key={album.id}>
              <AlbumImage src={Travel} alt="Album Image" />
              <Detail>
                <TitleContainer>
                  <Title>{album.title}</Title>
                  <img
                    src={Share}
                    style={{ width: '0.8vw', height: '0.9vw' }}
                    alt="Share Icon"
                  />
                </TitleContainer>
                <Made>{album.date}</Made>
                <HashTag>{album.hashtag}</HashTag>
              </Detail>
            </Album>
          ))}
        </AlbumContainer>
      </CreatesContainer>
    </>
  );
};

export default Travelog;

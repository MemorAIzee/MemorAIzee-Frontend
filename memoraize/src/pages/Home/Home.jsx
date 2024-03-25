import styled from 'styled-components';
import Header from '../../components/Header/Header';
import HomeBanner from '../../assets/images/HomeBanner.png';
import Travelog from '../../components/Travelog/Travelog';
import FriendAlbum from '../../components/FriendAlbum/FriendAlbum';
import MemoryCut from '../../components/MemoryCut/MemoryCut';
const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <Header />

      <BannerContainer>
        <img src={HomeBanner} style={{ width: '100%', height: '27vw' }} />
      </BannerContainer>

      <Container>
        <Travelog />
        <FriendAlbum />
        <MemoryCut />
      </Container>
    </>
  );
};

export default Home;

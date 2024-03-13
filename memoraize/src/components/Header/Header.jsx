import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
const HeaderContainer = styled.div`
  width: 100%;
  height: 8vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 8px 6px -6px #00000029; /* 그림자 효과 추가 */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.45vw;
  width: 60%;
  align-items: center;
  gap: 3.4vw;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: black;
  font-size: 1.2vw;
  font-weight: 500;
  text-decoration: none;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const SearchBar = styled.div`
  width: 18vw;
  height: 2vw;
  background-color: #e1e1e1;
  border-radius: 0.5vw;
`;

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logotitle = styled.p`
  font-size: 1.2vw;
  color: #0034ed;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <HeaderLogo>
            <img src={Logo} style={{ width: '5.2vw', height: '5.2vw' }} />
            <Logotitle>MEMORAIZE</Logotitle>
          </HeaderLogo>
          <StyledNavLink>홈</StyledNavLink>
          <StyledNavLink>앨범생성</StyledNavLink>
          <StyledNavLink>리뷰</StyledNavLink>
          <StyledNavLink>마이페이지</StyledNavLink>
          <SearchBar />
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

import Header from '../../components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* background-color: yellow; */
  margin-top: 4vw;
  height: 40vw;
  align-items: center;
`;

const SignupText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 5.65vw;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.25vw;
  align-items: center;
  margin-bottom: 4vw;
`;

const Text = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const IdField = styled.input`
  width: 33.6vw;
  height: 2.4vw;
  flex-shrink: 0;
  border-radius: 0.2vw;
  border: 0.1vw solid #e1e1e1;
  background: #f7f7f7;
`;

const AllFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Signup = () => {
  return (
    <>
      <Header />
      <Container>
        <SignupContainer>
          <SignupText>Sign Up</SignupText>
          <AllFieldContainer>
            <FieldContainer>
              <Text>아이디</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>비밀번호</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>비밀번호 확인</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>닉네임</Text>
              <IdField />
            </FieldContainer>
            <FieldContainer>
              <Text>휴대폰 인증</Text>
              <IdField />
            </FieldContainer>
          </AllFieldContainer>
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;

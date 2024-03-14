import Header from '../../components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: yellow;
  margin-top: 4vw;
  height: 20vw;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.9vw;
  gap: 1.5vw;
`;

const InputField = styled.input`
  width: 40vw;
  height: 3.2vw;
  border-radius: 5px;
  border: 1px solid var(--Gray-Gray-300, #d1d1d1);
  padding-left: 0.8vw;
`;

const LoginText = styled.p`
  font-size: 3vw;
  font-weight: 700;
`;

const FindText = styled.p`
  font-size: 0.7vw;
`;
const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginContainer>
          <LoginText>Login</LoginText>
          <InputContainer>
            <InputField placeholder="아이디를 입력해주세요"></InputField>
            <InputField placeholder="비밀번호를 입력해주세요"></InputField>
          </InputContainer>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;

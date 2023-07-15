import GlobalStyle from "globalStyles";
import { Logo } from "components/Logo";
import styled from "styled-components";
import { LoginForm } from "components/LoginForm";

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 101vh;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 476px;
  box-sizing: border-box;
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppBody>
        <AppContainer>
          <Logo />
          <LoginForm />
        </AppContainer>
      </AppBody>
    </>
  );
};

export default App;

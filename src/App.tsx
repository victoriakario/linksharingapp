import GlobalStyle from "globalStyles";
import styled from "styled-components";
// import { CreateAccount } from "pages/CreateAccount";
import { HomeLayout } from "pages/HomeLayout";
// import { LoginForm } from "pages/LoginForm";

const AppBody = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 101vh;
  position: relative;
  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppBody>
        <HomeLayout />
      </AppBody>
    </>
  );
};

export default App;

import { Logo } from "components/Logo";
import styled from "styled-components";

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 101vh;
  box-sizing: border-box;
  position: relative;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 476px;
  box-sizing: border-box;
`;

const App = (): JSX.Element => {
  return (
    <AppBody>
      <AppContainer>
        <Logo />
        <div style={{height: "482px", border: "1px solid hotpink"}}>
          I am a div.
        </div>
      </AppContainer>
    </AppBody>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Logo, PanelContainer } from "components";

const Container = styled.div`
  background-color: var(--panel-background-color);
  box-sizing: border-box;
  height: 101vh;
  max-width: 476px;
  width: 100%;

  @media (min-width: 786px) {
    background-color: var(--background-color);
    height: unset;
  }
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 32px;
  margin-bottom: 64px;


  @media (min-width: 786px) {
    justify-content: center;
    margin-bottom: 51px;
    margin-top: unset;
  }
`;

export const AccessRestrictedLayout = (): JSX.Element => {

  return (
    <Container className="container">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <PanelContainer>
        <Outlet />
      </PanelContainer>
    </Container>
  );
};

import { ReactNode } from "react";
import styled from "styled-components";

import { Logo } from "components/Logo";

interface AuthContainerProps {
  children?: ReactNode;
}

const Container = styled.div`
  background-color: var(--panel-background-color);
  box-sizing: border-box;
  max-width: 476px;
  padding: 2rem;
  width: 100%;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 64px;
  @media (min-width: 786px) {
    justify-content: center;
    padding-bottom: 91px;
  }
`;

export const AuthContainer = ({ children }: AuthContainerProps): JSX.Element => {

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      { children }
    </Container>
  );
};

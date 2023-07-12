import styled from "styled-components";
import { ReactComponent as LogoImage } from "assets/images/logo-devlinks-large.svg";


const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 64px;
  @media (min-width: 481px) {
    justify-content: center;
    padding-bottom: 91px;
  }
`;

export const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoImage />
    </LogoContainer>
  );
};

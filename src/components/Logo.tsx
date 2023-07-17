import styled from "styled-components";

import { ReactComponent as LogoLarge } from "assets/images/logo-devlinks-large.svg";
import { ReactComponent as LogoSmall } from "assets/images/logo-devlinks-small.svg";

interface LogoProps {
  small?: boolean;
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = ({small = false}: LogoProps): JSX.Element => {
  return (
    <LogoContainer>
      {small ? <LogoSmall /> : <LogoLarge />}
    </LogoContainer>
  );
};

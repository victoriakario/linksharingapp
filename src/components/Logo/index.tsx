import styled from "styled-components";

import { LogoLarge, LogoSmall } from "components/graphics";

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

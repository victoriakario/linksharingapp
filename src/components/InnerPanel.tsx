import { ReactNode } from "react";
import styled from "styled-components";

import { PanelContainer } from "components/PanelContainer";

interface InnerPanelProps {
  children?: ReactNode;
}

const InnerBackground = styled(PanelContainer)`
  background-color: var(--background-color);
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  
  &:last-child {
    margin: 0;
  }
`;

export const InnerPanel = ({children}: InnerPanelProps): JSX.Element => {
  return (
    <InnerBackground>
      {children}
    </InnerBackground>
  );
};

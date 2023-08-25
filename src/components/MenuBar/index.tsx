import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { Button, Logo, Tab } from "components";
import { PreviewHeaderIcon } from "components/icons";

const MenuBarWrapper = styled.div`
  align-items: center;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: var(--panel-background-color);
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 1rem 1.5rem;

  @media (min-width: 786px) {
    margin: 1.5rem;
  }
`;

const PreviewButton = styled(Button)`
  width: unset;
  margin: unset;
  padding: 11px 16px;
  
  @media (min-width: 786px) {
    padding: 11px 27px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export const MenuBar = (): JSX.Element => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: "786px" });

  return (
    <MenuBarWrapper>
      <Logo small={!isDesktopOrTablet} />
      <Spacer />
      <Tab href="#" isCurrentTab tabtype="link" />
      <Tab href="#" tabtype="profile" />
      <Spacer />
      <PreviewButton $variant="secondary" as="a" href="#">
        { isDesktopOrTablet ? "Preview" : <PreviewHeaderIcon /> }
      </PreviewButton>
    </MenuBarWrapper>
  );
};



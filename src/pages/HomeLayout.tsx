import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { Button } from "components/Button";
import { PreviewHeaderIcon } from "components/icons";
import { Logo } from "components/Logo";
import { Tab } from "components/Tab";

interface HomeLayoutProps {
  children?: ReactNode;
}

const HomeWrapper = styled.div`
  box-sizing: border-box;
  min-height: 101vh;
  position: relative;
  width: 100%;
`;

const MenuBar = styled.div`
align-items: center;
box-sizing: border-box;
display: flex;
flex-direction: row;
padding: 1rem 1rem 1rem 1.5rem;
width: 100%;
`;

const MenuBarWrapper = styled.div`
  @media (min-width: 786px) {
    padding: 1.5rem;
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

export const HomeLayout = ({ children }: HomeLayoutProps): JSX.Element => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: "786px" });

  return (
    <HomeWrapper>
      <MenuBarWrapper>
        <MenuBar>
          <Logo small={!isDesktopOrTablet} />
          <Spacer />
          <Tab href="#" isCurrentTab tabtype="link" />
          <Tab href="#" tabtype="profile" />
          <Spacer />
          <PreviewButton $variant="secondary" as="a" href="#">
            { isDesktopOrTablet ? "Preview" : <PreviewHeaderIcon /> }
          </PreviewButton>
        </MenuBar>
      </MenuBarWrapper>
      { children }
    </HomeWrapper>
  );
};

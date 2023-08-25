import { AnchorHTMLAttributes } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

import { Button } from "components";
import { LinksHeaderIcon, ProfileDetailsHeaderIcon } from "components/icons";

interface TabProps {
  isCurrentTab?: boolean;
  tabtype: "link" | "profile";
}

interface TabButtonProps {
  $isCurrentTab?: boolean;
}

const activeStyles = css`
  background-color: var(--accent-light-color);
  color: var(--accent-color);

  && svg path {
    fill: var(--accent-color);
  }

  &&:hover {
    background-color: var(--accent-light-color);
    box-shadow: none;
    color: var(--accent-color);
    cursor: unset;
  }
  
  &&:hover svg path {
    fill: var(--accent-color);
  }
`;

const TabButton = styled(Button)<TabButtonProps>`
  background-color: var(--light-text-color);
  color: var(--body-text-color);
  margin: 0;
  text-decoration: none;
  user-select: none;
  width: unset;

  && svg path {
    fill: var(--body-text-color);
  }

  &&:hover {
    background-color: var(--light-text-color);
    box-shadow: none;
    color: var(--accent-color);
  }

  &&:hover svg path {
    fill: var(--accent-color);
  }
  ${({ $isCurrentTab = false }): typeof activeStyles | false => $isCurrentTab && activeStyles }
`;

export const Tab = ({isCurrentTab = false, tabtype, ...rest}: AnchorHTMLAttributes<HTMLAnchorElement> & TabProps): JSX.Element => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: "786px" });
  const tabContent = tabtype === "link" ? "Links" : "Profile Details";

  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <TabButton $isCurrentTab={isCurrentTab} as="a" {...rest}>
      { tabtype === "link" ? <LinksHeaderIcon /> : <ProfileDetailsHeaderIcon /> }
      { isDesktopOrTablet ? tabContent : null }
    </TabButton>
  );
};

import { useCallback } from "react";
import styled from "styled-components";

import { ArrowRightIcon } from "components/icons";
import * as icons from "components/icons";
import { bodyTextSmall } from "components/Typography";

import { Button } from "./Button";

interface LinksButtonProps {
  icon?: keyof typeof icons;
  linklabel?: string;
}

const LinksButton = styled(Button)`
  ${bodyTextSmall}
  color: var(--light-text-color);
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 44px;
  justify-content: flex-start;
  margin: 0;
  padding: 11px 16px;
  
  & svg path {
    fill: var(--light-text-color);
  }
`;

const LinkText = styled.div`
  flex: 1 0 0;
  text-align: left;
`;


export const LinkshareButton = ({ icon, linklabel }: LinksButtonProps): JSX.Element => {
  const renderIcon = useCallback(() => {
    if (icon === undefined || !(icon in icons)) {
      return null;
    }

    const Icon = icons[icon];

    return <Icon />;

  }, [icon]);

  return (
    <LinksButton>
      {renderIcon()}
      <LinkText>
        {linklabel}
      </LinkText>
      <ArrowRightIcon />
    </LinksButton>
  );
};

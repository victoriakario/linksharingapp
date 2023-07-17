import styled, { css } from "styled-components";

import { headingSmall } from "components/Typography";

interface ButtonProps {
  $variant?: "primary" | "secondary";
}


const secondaryStyles = css`
  background-color: var(--light-text-color);
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  &:active:not(:disabled) {
    backgound-color: var(--accent-light-color);
  }
`;

export const Button = styled.button<ButtonProps>`
  ${headingSmall};
  align-items: center;
  background-color: var(--accent-color);
  border: 0px solid transparent;
  border-radius: 8px;
  color: var(--light-text-color);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: .5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  outline: none;
  padding: 11px 27px;
  width: 100%;

  &:active:not(:disabled) {
    background-color: var(--accent-hover-color);
    box-shadow: var(--box-shadow-primary);
  }

  ${({$variant = "primary"}): typeof secondaryStyles | null => {
    return $variant === "secondary" ? secondaryStyles : null;
  }}

  &:disabled {
    opacity: .25;
    cursor: not-allowed;
  }
`;

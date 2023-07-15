import styled from "styled-components";
import { headingSmall } from "./Typography";

export const Button = styled.button`
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
  height: 46px;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
  &:active:not(:disabled),
  &:hover:not(:disabled) {
    background-color: var(--accent-hover-color);
    box-shadow: var(--box-shadow-primary);
  }
  &:disabled{
    opacity: .25;
    cursor: not-allowed;
  }
`;


import { useCallback } from "react";
import styled from "styled-components";

import * as icons from "components/icons";
import { bodyText, bodyTextSmall } from "components/Typography";

interface InputFieldProps {
  error?: string;
  fieldName: string;
  icon?: keyof typeof icons;
  label: string;
  placeholder?: string;
  type?: "password" | "text";
}

const FieldWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const addErrorStyling = ({error}: {error?: string}): string | null => {
  if (error === undefined) return null;

  return "--input-border-color: var(--alert-color);";
};

const InputContentBox = styled.div<{error?: string}>`
  ${addErrorStyling}
  align-items: center;
  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: .75rem;
  padding: 12px 16px;
  position: relative;
  width: 100%;
  &:focus-within {
    border-color: var(--accent-color);
    box-shadow: var(--box-shadow-primary);
  }
`;

const Label = styled.label`
  ${bodyTextSmall};
  color: var(--heading-text-color);
  display: block;
  margin-bottom: .25rem;
`;

const Input = styled.input`
  ${bodyText};
  border: none;
  outline: none;
  padding: 0;
  flex: 1;

  &:focus {
    outline: none;
  }
  
  &::placeholder {
    opacity: 0.5;
  }
`;

const Messages = styled.div`
  ${bodyTextSmall};
  color: var(--alert-color);
  flex: 0 0 auto;
  text-align: right;
`;

export const InputField = ({error, fieldName, label, placeholder, type = "text", icon}: InputFieldProps): JSX.Element => {
  const renderIcon = useCallback(() => {
    if (icon === undefined || !(icon in icons)) {
      return null;
    }

    const Icon = icons[icon];

    return <Icon />;

  }, [icon]);

  return (
    <FieldWrapper>
      <Label htmlFor={`input-${fieldName}`}>
        {label}
      </Label>
      <InputContentBox error={error}>
        {renderIcon()}
        <Input
          id={`input-${fieldName}`}
          maxLength={360}
          placeholder={placeholder}
          size={1}
          type={type}
        />
        { error !== undefined && <Messages>{error}</Messages>}
      </InputContentBox>
    </FieldWrapper>
  );
};

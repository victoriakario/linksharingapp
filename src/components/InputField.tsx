import { useCallback } from "react";
import styled from "styled-components";
import { bodyText, bodyTextSmall } from "./Typography";
import * as icons from "components/icons";

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
  display: block;
  outline: none;
  padding: 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  flex-grow: 1;
  &::placeholder {
    opacity: 0.5;
  }
`;

const Messages = styled.div`
  ${bodyTextSmall};
  color: var(--alert-color);
  text-align: right;
`;


export const InputField = ({error, fieldName, label, placeholder, type = "text", icon}: InputFieldProps): JSX.Element => {
  const renderIcon = useCallback(() => {
    if (icon === undefined) {
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
          type={type}
        />
        { error !== undefined && <Messages>{error}</Messages>}
      </InputContentBox>
    </FieldWrapper>
  );
};

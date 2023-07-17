import styled from "styled-components";

import { bodyText, bodyTextSmall, headingMedium } from "components/Typography";
import { InputField } from "components/InputField";
import { Button } from "components/Button";
import { AuthContainer } from "components/AuthContainer";

const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Heading = styled.div`
  ${headingMedium};
`;

const HelperText = styled.div`
  ${bodyText};
  display: block;
  margin-bottom: 2.5rem;
`;

const HelperTextSmall = styled(HelperText)`
  ${bodyTextSmall};
  margin-bottom: 1.5rem;
`;


const CenteredHelperText = styled(HelperText)`
  text-align: center;
  margin-bottom: unset;
  & > & {
    color: var(--accent-color);
    display: block;
    text-decoration: none;
    &:hover {
      color: var(--accent-hover-color);
    }
  }
  @media (min-width: 786px) {
    & > & {
      display: inline;
      padding-left: .25em;
    }
  }
`;

export const CreateAccount = (): JSX.Element => {
  return (
    <AuthContainer>
      <FormWrapper>
        <Heading>
          Create Account
        </Heading>
        <HelperText>
          Let&apos;s get you started sharing your links!
        </HelperText>
        <InputField
          fieldName="email"
          icon="EmailIcon"
          label="Email Address"
          placeholder="e.g., alex@email.com"
        />
        <InputField
          fieldName="create_password"
          icon="PasswordIcon"
          label="Create Password"
          placeholder="At least 8 characters"
          type="password"
        />
        <InputField
          fieldName="confirm_password"
          icon="PasswordIcon"
          label="Confirm Password"
          placeholder="At least 8 characters"
          type="password"
        />
        <HelperTextSmall>
          Password must contain at least 8 characters
        </HelperTextSmall>
        <Button>Create new account</Button>
        <CenteredHelperText>
          Already have an account?
          <CenteredHelperText as="a" href="#">
            Login
          </CenteredHelperText>
        </CenteredHelperText>

      </FormWrapper>
    </AuthContainer>
  );
};

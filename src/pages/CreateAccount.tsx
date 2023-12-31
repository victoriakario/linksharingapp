import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, InputField } from "components";
import { bodyText, bodyTextSmall, headingMedium } from "components/Typography";


const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: unset;

  & > a {
    color: var(--accent-color);
    text-decoration: none;

    &:hover {
      color: var(--accent-hover-color);
    }
  }
  
  @media (min-width: 786px) {
    flex-direction: row;
    justify-content: center;

    & > a {
      padding-left: .25em;
    }
  }
`;

export const CreateAccount = (): JSX.Element => {
  return (
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
        <Link to="/login">Login</Link>
      </CenteredHelperText>

    </FormWrapper>
  );
};

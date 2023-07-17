import styled from "styled-components";

import { AuthContainer } from "components/AuthContainer";
import { Button } from "components/Button";
import { InputField } from "components/InputField";
import { bodyText, headingMedium } from "components/Typography";

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

const CenteredHelperText = styled(HelperText)`
  margin-bottom: unset;
  text-align: center;
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

export const LoginForm = (): JSX.Element => {
  return (
    <AuthContainer>
      <FormWrapper>
        <Heading>
          Login
        </Heading>
        <HelperText>
          Add your details below to get back into the app
        </HelperText>
        <InputField
          fieldName="email"
          icon="EmailIcon"
          label="Email Address"
          placeholder="e.g., alex@email.com"
        />
        <InputField
          fieldName="password"
          icon="PasswordIcon"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button>Login</Button>
        <CenteredHelperText>
          Don&apos;t have an account?
          <CenteredHelperText as="a" href="#">
            Create account
          </CenteredHelperText>
        </CenteredHelperText>
      </FormWrapper>
    </AuthContainer>
  );
};

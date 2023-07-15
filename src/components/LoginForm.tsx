import styled from "styled-components";
import { bodyText, headingMedium } from "./Typography";
import { InputField } from "./InputField";
import { Button } from "./Button";

const FormWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Heading = styled.div`
  ${headingMedium};
`;

const HelperText = styled.div`
  ${bodyText};
  margin-bottom: 2.5rem;
  display: block;

`;

const CenteredHelperText = styled(HelperText)`
  text-align: center;
  margin-bottom: unset;
  & > & {
    display: block;
    color: var(--accent-color);
    text-decoration: none;
    &:hover {
      color: var(--accent-hover-color);
    }
  }
  @media (min-width: 480px) {
    & > & {
      padding-left: .25em;
      display: inline;
    }
  }
`;

export const LoginForm = (): JSX.Element => {
  return (
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
        Don&rsquo;t have an account?
        <CenteredHelperText as="a" href="#">
          Create an Account
        </CenteredHelperText>
      </CenteredHelperText>

    </FormWrapper>
  );
};



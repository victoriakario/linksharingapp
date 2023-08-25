import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, InputField } from "components";
import { bodyText, headingMedium } from "components/Typography";


const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 35px;
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
  display: flex;
  flex-direction: column;
  margin-bottom: unset;
  align-items: center;
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

export const Login = (): JSX.Element => {
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
        Don&apos;t have an account?
        <Link to="/signup">Create account</Link>
      </CenteredHelperText>
    </FormWrapper>
  );
};

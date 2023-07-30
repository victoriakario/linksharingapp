import styled from "styled-components";

import { ImageUpload } from "components/ImageUpload";
import { InnerPanel } from "components/InnerPanel";
import { InputField } from "components/InputField";
import { PanelContainer } from "components/PanelContainer";
import { bodyText, headingMedium } from "components/Typography";


const ProfileContainer = styled(PanelContainer)`
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
  box-sizing: border-box;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 2.5rem;
`;

const HeadingMain = styled.h2`
  ${headingMedium}
  margin-bottom: 8px;
  margin-top: 0;
`;

const DescriptionText = styled.div`
  ${bodyText}
`;

const FieldDisplay = styled(InputField)`

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;

    & label {
      ${bodyText}
      flex: 1 1 0%;
      max-width: 240px;
      padding-right: 16px;
    }
    
    & label ~ div {
      flex: 1 1 0%;
      min-width: 70%;
    }
  }
`;


export const ProfileDetails = (): JSX.Element => {

  return (
    <ProfileContainer className="ProfileContainer">
      <HeaderSection>
        <HeadingMain>
          Profile Details
        </HeadingMain>
        <DescriptionText>
          Add your details to create a personal touch to your profile.
        </DescriptionText>
      </HeaderSection>
      <InnerPanel>
        <ImageUpload />
      </InnerPanel>
      <InnerPanel>
        <FieldDisplay fieldName="firstName" label="First Name*" placeholder="e.g., John" />
        <FieldDisplay fieldName="lastName" label="Last Name*" placeholder="e.g., Appleseed" />
        <FieldDisplay fieldName="emailAddress" label="Email" placeholder="e.g., email@example.com" />
      </InnerPanel>
    </ProfileContainer>
  );
};

import styled from "styled-components";

import { ImageUploadBox } from "components/ImageUploadBox";
import { bodyText } from "components/Typography";


const ProfileImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
`;

const ProfileImageLabel = styled.div`
  ${bodyText}
  text-align: left;

  @media (min-width: 768px) {
    flex: 1 1 240px;
    max-width: 240px;
  }
`;

const ProfileImageUpload = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
`;

const LegendText = styled.div`
  ${bodyText}
`;

export const ImageUpload = (): JSX.Element => {

  return (
    <ProfileImageUploadContainer>
      <ProfileImageLabel>Profile Picture</ProfileImageLabel>
      <ProfileImageUpload>
        <ImageUploadBox />
        <LegendText>
          Image must be below 1024x1024px. Use PNG or JPG format.
        </LegendText>
      </ProfileImageUpload>
    </ProfileImageUploadContainer>
  );
};

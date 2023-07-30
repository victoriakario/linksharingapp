import styled from "styled-components";

import PhoneImage from "assets/images/illustration-phone-mockup.svg";
import { LinkshareButton } from "components/LinkshareButton";
import { bodyText } from "components/Typography";
import { PanelContainer } from "components/PanelContainer";

interface PreviewPanelProps {
  imageURI: string | null;
}

interface ProfileImageProps {
  $imageURI: string | null;
}

const checkForImage = ({$imageURI}: ProfileImageProps): string | undefined => {
  if ($imageURI !== null) {
    return `background-image: url(${$imageURI});`;
  }

  return undefined;
};

const Panel = styled(PanelContainer)`

   @media (min-width: 1080px) {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1 1 560px;
    justify-content: center;
    max-width: 560px;
    min-width: 356px;
    padding: 1.5rem;
  }
`;

const PreviewBase = styled.div`
  background-image: url(${PhoneImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 632px;
  position: relative;
  width: 308px;
`;

const ProfileImage = styled.div<ProfileImageProps>`
  aspect-ratio: 1 / 1;
  ${checkForImage}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 25px;
  margin-inline: 105px;
  margin-top: 63.5px;
  width: 96px;
`;

const ProfileInfo = styled.div`
  align-items: center;
  background-color: var(--panel-background-color);
  display: flex;
  flex-direction: column; 
  gap: 8px;
  justify-content: flex-start;
  margin-inline: 34.5px;
  margin-bottom: 37px;
  min-height: 56px;
  width: 237px;
`;

const ProfileName = styled.div`
  ${bodyText}
`;

const ProfileEmail = styled.div`
  font-size: 14px;
`;

const LinksPreview = styled.div`
  align-items: flex-start;
  background-color: var(--panel-background-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 300px;
  margin-bottom: 53.5px;
  margin-inline: 34.5px;
  margin-top: 0;
  width: 237px;
 `;

export const PreviewPanel = ({imageURI}: PreviewPanelProps): JSX.Element => {

  return (
    <Panel>
      <PreviewBase>
        <ProfileImage $imageURI={imageURI} />
        <ProfileInfo>
          <ProfileName>
            DUMMY DATA
          </ProfileName>
          <ProfileEmail>
            EMAIL ADDRESS
          </ProfileEmail>
        </ProfileInfo>
        <LinksPreview>
          <LinkshareButton icon="GitHubIcon" linklabel="GitHub" />
        </LinksPreview>
      </PreviewBase>
    </Panel>
  );
};

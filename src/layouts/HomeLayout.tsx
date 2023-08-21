import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { useImageURI } from "globalstate/ImageURI";

import { Button, MenuBar, PanelContainer, PreviewPanel } from "components";


const HomeWrapper = styled.div`
  box-sizing: border-box;
  min-height: 101vh;
  position: relative;
  width: 100%;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;

  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.5rem;
    padding-top: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  @media (min-width: 1080px) {
    flex: 1 1 0%;
  }
`;

const ButtonContainer = styled(PanelContainer)`
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-top: 1px solid var(--input-border-color);
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  @media (min-width: 480px) {
    padding: 1.5rem 2.5rem;
  }
`;

const SaveButton = styled(Button)`
  margin-bottom: 0;
  
  @media (min-width: 768px) {
    width: unset;
  }
`;


export const HomeLayout = (): JSX.Element => {
  const isDesktop = useMediaQuery({ minWidth: "1080px"});
  const {imageURI} = useImageURI();

  return (
    <HomeWrapper className="HomeWrapper">
      <MenuBar />
      <ContentContainer>
        { isDesktop ? <PreviewPanel imageURI={imageURI} /> : null }
        <ContentWrapper>
          <Outlet />
          <ButtonContainer>
            <SaveButton>
              Save
            </SaveButton>
          </ButtonContainer>
        </ContentWrapper>
      </ContentContainer>
    </HomeWrapper>
  );
};

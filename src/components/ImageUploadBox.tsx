import { ChangeEvent, useCallback } from "react";
import styled from "styled-components";

import { useImageURI } from "globalstate/ImageURI";

import { UploadImageIcon } from "components/icons";
import { headingSmall } from "components/Typography";

interface LabelProps {
  $hasImage: boolean;
  $imageURI: string | null;
}

const checkForImage = ({$hasImage, $imageURI}: LabelProps): string | undefined => {
  if ($hasImage) {
    return `
    ${$imageURI === null ? "" : `background-image: url(${$imageURI});`}
    color: var(--light-text-color);
    & svg path {
      fill: var(--light-text-color);
    }
    `;
  }

  return undefined;
};

const UploadBox = styled.label<LabelProps>`
  ${headingSmall}
  align-items: center;
  background-color: var(--accent-light-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  box-sizing: border-box;
  color: var(--accent-color);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;
  padding: 61px 38px 60px 39px;

  ${checkForImage}
  
  @media (min-width: 768px) {
    min-width: 195px;
  }
`;

export const ImageUploadBox = (): JSX.Element => {
  const {imageURI, setImageURI} = useImageURI();
  const fileChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev): void => {
        if (ev.target?.result instanceof ArrayBuffer) {
          return;
        }
        if (typeof ev.target?.result === "undefined") return;
        console.log(ev.target.result);
        setImageURI(ev.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, [setImageURI]);

  return (
    <>
      <UploadBox $hasImage={imageURI !== null} $imageURI={imageURI} htmlFor="uploadProfileImage" >
        <UploadImageIcon />
        {imageURI === null ? "+ Upload Image" : "Change Image"}
      </UploadBox>
      <input id="uploadProfileImage" onChange={fileChangeHandler} style={{display: "none"}} type="file" />
    </>
  );
};

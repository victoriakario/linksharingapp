import { ChangeEvent, useCallback } from "react";
import styled from "styled-components";

import { useImageURI } from "globalstate/ImageURI";

import { UploadImageIcon } from "components/icons";
import { headingSmall } from "components/Typography";
import { InterpolationFunction } from "utils";

interface LabelProps {
  $hasImage: boolean;
  $imageURI?: string;
}

const checkForImage: InterpolationFunction<LabelProps> = ({$hasImage, $imageURI = ""}) => {
  if ($hasImage) {
    return `
      ${$imageURI ? `background-image: url(${$imageURI});` : ""}
      color: var(--light-text-color);
      & svg path {
        fill: var(--light-text-color);
      }
    `;
  }

  return null;
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
    // check event for uploaded image
    if (e.target.files?.[0]) {
      const reader = new FileReader();

      // This will run after the processing completes
      // and set the dataUrl as the state.
      reader.onload = (ev): void => {
        if (ev.target?.result instanceof ArrayBuffer) {
          return;
        }
        if (typeof ev.target?.result === "undefined") return;
        setImageURI(ev.target.result ?? "");
      };

      // Create image as base64 uri
      reader.readAsDataURL(e.target.files[0]);
    }
  }, [setImageURI]);

  return (
    <>
      <UploadBox $hasImage={imageURI !== ""} $imageURI={imageURI} htmlFor="uploadProfileImage" >
        <UploadImageIcon />
        {imageURI === "" ? "+ Upload Image" : "Change Image"}
      </UploadBox>
      <input id="uploadProfileImage" onChange={fileChangeHandler} style={{display: "none"}} type="file" />
    </>
  );
};

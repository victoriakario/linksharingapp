import { create } from "zustand";

interface ImageURIState {
  imageURI?: string;
  setImageURI: (uri: string) => void;
}

export const useImageURI = create<ImageURIState>((set) => ({
  imageURI: undefined,
  setImageURI: (uri): void => set({ imageURI: uri }),
}));

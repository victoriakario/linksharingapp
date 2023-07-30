import { create } from "zustand";

interface ImageURIState {
  imageURI: string | null;
  setImageURI: (uri: string | null) => void;
}

export const useImageURI = create<ImageURIState>((set) => ({
  imageURI: null,
  setImageURI: (uri): void => set({ imageURI: uri }),
}));

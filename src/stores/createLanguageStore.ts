import programmingLanguages, { type ProgrammingLanguage } from "~/utils/languages";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type LanguageSlice = {
  language: ProgrammingLanguage;
  setLanguage: (newLanguage: ProgrammingLanguage) => void;
};

const defaultLanguageIndex = 0; // e.g., Python

export const createLanguageSlice: BoundStateCreator<LanguageSlice> = (set) => ({
  language: programmingLanguages[defaultLanguageIndex],
  setLanguage: (newLanguage: ProgrammingLanguage) => set({ language: newLanguage }),
});

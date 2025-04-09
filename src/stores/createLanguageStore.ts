import programmingLanguages, { type ProgrammingLanguages } from "~/utils/languages";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type LanguageSlice = {
  language: ProgrammingLanguages;
  setLanguage: (newLanguage: ProgrammingLanguages) => void;
};

const defaultLanguageIndex = 0; // e.g., Python

export const createLanguageSlice: BoundStateCreator<LanguageSlice> = (set) => ({
  language: programmingLanguages[defaultLanguageIndex],
  setLanguage: (newLanguage: ProgrammingLanguages) => set({ language: newLanguage }),
});

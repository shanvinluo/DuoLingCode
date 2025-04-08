export const programmingLanguages = [
  {
    name: "Python",
    nativeName: "Python",
    viewBox: "0 0 82 66",
    code: "py",
  },
  {
    name: "Java",
    nativeName: "Java",
    viewBox: "0 66 82 66",
    code: "java",
  },
  {
    name: "JavaScript",
    nativeName: "JavaScript",
    viewBox: "0 132 82 66",
    code: "js",
  },
  {
    name: "C++",
    nativeName: "C++",
    viewBox: "0 198 82 66",
    code: "cpp",
  },
  {
    name: "C#",
    nativeName: "C#",
    viewBox: "0 264 82 66",
    code: "cs",
  },
  {
    name: "Go",
    nativeName: "Go",
    viewBox: "0 330 82 66",
    code: "go",
  },
  {
    name: "Rust",
    nativeName: "Rust",
    viewBox: "0 396 82 66",
    code: "rs",
  },
  {
    name: "Ruby",
    nativeName: "Ruby",
    viewBox: "0 462 82 66",
    code: "rb",
  },
  {
    name: "TypeScript",
    nativeName: "TypeScript",
    viewBox: "0 528 82 66",
    code: "ts",
  },
  {
    name: "PHP",
    nativeName: "PHP",
    viewBox: "0 594 82 66",
    code: "php",
  },
  {
    name: "Kotlin",
    nativeName: "Kotlin",
    viewBox: "0 660 82 66",
    code: "kt",
  },
  {
    name: "Swift",
    nativeName: "Swift",
    viewBox: "0 726 82 66",
    code: "swift",
  },
  {
    name: "R",
    nativeName: "R",
    viewBox: "0 792 82 66",
    code: "r",
  },
  {
    name: "SQL",
    nativeName: "SQL",
    viewBox: "0 858 82 66",
    code: "sql",
  },
] as const;

export type ProgrammingLanguage = (typeof programmingLanguages)[number];

export default programmingLanguages;

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
    name: "SQL",
    nativeName: "SQL",
    viewBox: "0 858 82 66",
    code: "sql",
  },
  {
    name: "OOP",
    nativeName: "Object-Oriented Programming",
    code: "oop",
    viewBox: "0 330 82 66", // Matches <g transform="translate(0, 330)">
  },
  {
    name: "Recursion",
    nativeName: "Recursion",
    code: "rec",
    viewBox: "0 396 82 66", // Matches <g transform="translate(0, 396)">
  },
  {
    name: "Data Structures & Algorithms",
    nativeName: "Data Structures & Algorithms",
    code: "ds",
    viewBox: "0 462 82 66", // Matches <g transform="translate(0, 462)">
  },
] as const;

export type ProgrammingLanguage = (typeof programmingLanguages)[number];

export default programmingLanguages;

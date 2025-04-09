export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
  difficulty: string;
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Learn the basics of coding",
    backgroundColor: "bg-[#ffa116]",
    textColor: "text-[#ffa116]",
    borderColor: "border-[#2d2d2d]",
    difficulty: "Easy",
    tiles: [
      {
        type: "star",
        description: "Simple Coding Problems",
      },
      {
        type: "star",
        description: "Simple Coding Problems",
      },
      {
        type: "star",
        description: "Simple Coding Problems",
      },
      {
        type: "star",
        description: "Simple Coding Problems",
      },
 
      { type: "treasure" },
      {
        type: "star",
        description: "Simple Coding Problems",
      },   {
        type: "star",
        description: "Simple Coding Problems",
      },   {
        type: "trophy",
        description: "Simple Coding Problems",
      },      
    ],
  },
  {
    unitNumber: 2,
    description: "A deeper dive into coding",
    backgroundColor: "bg-[#ffa116]",
    textColor: "text-[#ffa116]",
    borderColor: "border-[#2d2d2d]",
    difficulty: "Medium",
    tiles: [
      {
        type: "fast-forward",
        description: "Intermediate Coding Problems",
      },
      {
        type: "star",
        description: "Intermediate Coding Problems",
      },
      {
        type: "star",
        description: "Intermediate Coding Problems",
      },
      {
        type: "book",
        description: "Intermediate Coding Problems",
      },
 
      { type: "treasure" },
      {
        type: "star",
        description: "Intermediate Coding Problems",
      },   {
        type: "star",
        description: "Intermediate Coding Problems",
      },   {
        type: "trophy",
        description: "Intermediate Coding Problems",
      },      
    ],
  },
  {
    unitNumber: 3,
    description: "A deeper dive into coding",
    backgroundColor: "bg-[#ffa116]",
    textColor: "text-[#ffa116]",
    borderColor: "border-[#2d2d2d]",
    difficulty: "Hard",
    tiles: [
      {
        type: "fast-forward",
        description: "Advanced Coding Problems",
      },
      {
        type: "star",
        description: "Advanced Coding Problems",
      },
      {
        type: "star",
        description: "Advanced Coding Problems",
      },
      {
        type: "book",
        description: "Advanced Coding Problems",
      },
 
      { type: "treasure" },
      {
        type: "star",
        description: "Advanced Coding Problems",
      },   {
        type: "dumbbell",
        description: "Advanced Coding Problems",
      },   {
        type: "trophy",
        description: "Advanced Coding Problems",
      },      
    ],
  }
];
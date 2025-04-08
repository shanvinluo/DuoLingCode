export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
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
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
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
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
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
    description: "Advanced coding techniques",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
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
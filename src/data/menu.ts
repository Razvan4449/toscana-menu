export const brand = {
  name: "VASILIU’S",
  edition: "MOLDAVIAN PEARL IS ON THE MOVE — TUSCANY EDITION",
  heroLine: "A questionable level of elegance.",
  heroSub: "One table. Too much confidence. Tuscan nonsense, served properly.",
  overviewTitle: "Tonight’s unnecessary level of excellence",
  overviewBody:
    "A tiny menu with huge ambition — prepared with courage and limited supervision.",
};

export type Dish = {
  name: string;
  line: string;
};

export type Course = {
  id: string;
  number: string;
  title: string;
  italian: string;
  vibe: string;
  note: string;
  dishes: Dish[];
  tone: "cream" | "wine" | "olive";
};

export const courses: Course[] = [
  {
    id: "antipasti",
    number: "01",
    title: "Antipasti",
    italian: "The opening act",
    vibe: "Approach with hunger.",
    note: "Dangerously snackable energy. Do not finish before the main arrives — or do. We are not your parents.",
    tone: "cream",
    dishes: [
      {
        name: "Bruschetta al Pomodoro",
        line: "Looks innocent. Disappears instantly.",
      },
      {
        name: "Burrata & Basil",
        line: "Soft diplomacy in cheese form.",
      },
      {
        name: "Affettati della Casa",
        line: "Built for dramatic table silence.",
      },
    ],
  },
  {
    id: "main",
    number: "02",
    title: "Main",
    italian: "The dramatic centerpiece",
    vibe: "This course has main character energy.",
    note: "Very serious food business. Certified villa behavior.",
    tone: "wine",
    dishes: [
      {
        name: "Carbonara Monumentale",
        line: "No cream. No fear. Only destiny.",
      },
      {
        name: "Tagliata di Manzo",
        line: "Too elegant for the chaos around it.",
      },
      {
        name: "Contorno del Giorno",
        line: "The supporting actor that steals scenes.",
      },
    ],
  },
  {
    id: "dessert",
    number: "03",
    title: "Dessert",
    italian: "The sweet finale, obviously",
    vibe: "Emotionally necessary.",
    note: "A special edition nobody asked for, but everyone needed.",
    tone: "olive",
    dishes: [
      {
        name: "Panna Cotta al Limone",
        line: "Soft, smug, and perfectly chilled.",
      },
      {
        name: "Cantucci & Vin Santo",
        line: "Dip, dunk, become legendary.",
      },
      {
        name: "Espresso della Casa",
        line: "For courage after the pasta.",
      },
    ],
  },
];

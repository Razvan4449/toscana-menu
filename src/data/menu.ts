export const brand = {
  name: "VASILIU’S",
  established: "Est. 09.08.2026",
  heroLine: "Capu jos Toscana s-a dat drumu la brate.",
  heroSub: "Cand masa e plina de prieteni mancare nici nu conteaza.",
  marquee:
    "Perla e in vacanta. In toscana. E in Italia. Gen ciubota aia. TUTTO PASSA.",
  edition: "Perla e in vacanta — Toscana Edition",
  overviewTitle: "Meniul serii",
  overviewBody: "Mic meniu, ambitie mare, sper ca v-ati EDIficat.",
  cta: "Deschide meniul",
  chefQuote: "Niciodata candva\nS a intamplat sa nu fie\nVreodata undeva candva.",
  finaleLabel: "Serviciu incheiat",
  finaleTitle: "Buon appetito",
  finaleLine: "Perla a aterizat in Toscana.",
  finaleSub: "Ne vedem la masa. Foamea da, demnitatea nu e obligatorie.",
};

export const faq = [
  {
    id: "festin",
    question: "Ce va recomanda pentru a dirija asemenea festin?",
    answer: "Bai tata mancarea n o inveti o faci.",
    type: "text" as const,
  },
  {
    id: "forte",
    question: "Punctul forte al acestui establishment:",
    answer: "Daca iese e bine. Daca nu iese e bine.",
    type: "text" as const,
  },
  {
    id: "castiga",
    question: "Cine va castiga in aceasta seara?",
    type: "vote" as const,
    options: [
      { id: "dacii", label: "Dacii" },
      { id: "samuraii", label: "Samuraii" },
    ],
  },
  {
    id: "trupe",
    question: "Cate trupe au cantat pe scena in aceasta seara?",
    answer: "3 in pula mea",
    type: "text" as const,
  },
];

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
    italian: "Actul de deschidere",
    vibe: "Apropia-te cu foame.",
    note: "Periculos de snackable. Nu termina tot inainte de felul principal — sau termina. Nu suntem parintii tai.",
    tone: "cream",
    dishes: [
      {
        name: "Bruschetta al Pomodoro",
        line: "Arata inocent. Dispare instant.",
      },
      {
        name: "Burrata & Basil",
        line: "Diplomatia moale, in forma de branza.",
      },
      {
        name: "Affettati della Casa",
        line: "Facut pentru linistea dramatica de la masa.",
      },
    ],
  },
  {
    id: "main",
    number: "02",
    title: "Main",
    italian: "Protagonistul serii",
    vibe: "Felul asta are main character energy.",
    note: "Business foarte serios cu mancarea. Comportament de villa certificat.",
    tone: "wine",
    dishes: [
      {
        name: "Carbonara Monumentale",
        line: "Fara smantana. Fara frica. Doar destin.",
      },
      {
        name: "Tagliata di Manzo",
        line: "Prea elegant pentru haosul din jur.",
      },
      {
        name: "Contorno del Giorno",
        line: "Actorul secundar care fura scena.",
      },
    ],
  },
  {
    id: "dessert",
    number: "03",
    title: "Dessert",
    italian: "Finalul dulce, evident",
    vibe: "Emotional necesar.",
    note: "O editie speciala pe care nimeni n-a cerut-o, dar toti o voiau.",
    tone: "olive",
    dishes: [
      {
        name: "Panna Cotta al Limone",
        line: "Moale, aroganta si perfect rece.",
      },
      {
        name: "Cantucci & Vin Santo",
        line: "Inmoi, inmoi iar, devii legenda.",
      },
      {
        name: "Espresso della Casa",
        line: "Curaj dupa pasta.",
      },
    ],
  },
];

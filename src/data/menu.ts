export const brand = {
  name: "VASILIU’S",
  established: "Est. 09.08.2026",
  heroLine: "Capu jos Toscana s-a dat drumu la brate.",
  heroSub: "Cand masa e plina de prieteni mancarea nici nu conteaza.",
  marquee:
    "Perla e in vacanta. In toscana. E in Italia. Gen ciubota aia. TUTTO PASSA.",
  edition: "Perla e in vacanta Toscana Edition",
  overviewTitle: "Meniul serii",
  overviewBody: "Mic meniu, ambitie mare, sper ca v-ati EDIficat.",
  cta: "Deschide meniul",
  chefQuote: "Niciodata candva\nS a intamplat sa nu fie\nVreodata undeva candva.",
  finaleLabel: "Va pup si va respekt.",
  finaleTitle: "Buon appetito",
  finaleLine:
    "Acesta experienta a fost gandita, creata, dibuita, nascocita, implementata, rumenita si desavarsita de RAZVAN ANDREI VASILIU CNP: 1209338209, COD CAYENNE: 0000001, 1,76m , 25 ani, marime papuc: 43 , fan redbull, audi, aston martin, cadillac, ferrari, redbull, audi.",
  finaleSub: "Ma inclin.",
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
    vibe: "Incepem usor, capul plecat sabia nu taie.",
    note: "",
    tone: "cream",
    dishes: [
      {
        name: "Bruschetta al Pomodoro",
        line: "Tartine cu rosii.",
      },
      {
        name: "Burrata & Basil",
        line: "Branza cu busuioc.",
      },
      {
        name: "Affettati della Casa",
        line: "Mezeluri tata.",
      },
    ],
  },
  {
    id: "main",
    number: "02",
    title: "Main",
    italian: "Protagonistul serii",
    vibe: "Mens sana in corpore sano.",
    note: "",
    tone: "wine",
    dishes: [
      {
        name: "Carbonara Monumentale",
        line: "D alea adevarate brother nu cu smantana sau alte nebunii, i auzi sunca bacon, c avetz ma.",
      },
      {
        name: "Pici all’Aglione",
        line: "Rosii tata, nu asa, rosii.",
      },
      {
        name: "Lasagna",
        line: "Starturi vere, cate una cate doua cate trei cate patru cate cinci cate sase.",
      },
    ],
  },
  {
    id: "dessert",
    number: "03",
    title: "Dessert",
    italian: "Finalul dulce, evident",
    vibe: "Emotional necesar.",
    note: "",
    tone: "olive",
    dishes: [
      {
        name: "Ricotta montata con miele e noci",
        line: "Branza dulce cu nuci.",
      },
      {
        name: "Panna Cotta al Limone",
        line: "Budinca italianca acra.",
      },
    ],
  },
];

export const drinks = {
  id: "bubuiala",
  number: "04",
  title: "Bubuiala",
  heading: "Recomandarea de bubuiala la aceasta masa:",
  items: [
    {
      name: "Sprit cu aperol",
      line: "De vara mai asa mai amar.",
    },
    {
      name: "Sprit cu limoncello",
      line: "De vara mai asa mai acru.",
    },
    {
      name: "N*****i",
      line: "Aicea va las pe voi sa ghiciti",
    },
    {
      name: "N*****i Sbagliato",
      line: "Hai ca v am ajutat oleaca",
    },
  ],
};

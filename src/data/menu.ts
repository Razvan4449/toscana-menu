export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

export type MenuCourse = {
  id: string;
  italian: string;
  english: string;
  intro: string;
  items: MenuItem[];
};

export const restaurant = {
  name: "Toscana",
  tagline: "Cucina Toscana",
  subtitle: "A quiet evening of Tuscan craft — courses served with restraint and intention.",
  location: "Firenze",
};

export const courses: MenuCourse[] = [
  {
    id: "antipasti",
    italian: "Antipasti",
    english: "To begin",
    intro: "Small openings from the pantry and the garden.",
    items: [
      {
        name: "Crostini Toscani",
        description:
          "Chicken liver pâté on grilled pane sciocco, finished with Vin Santo.",
        price: "18",
      },
      {
        name: "Panzanella",
        description:
          "Ripe tomatoes, torn bread, basil, and new oil — cold and bright.",
        price: "16",
      },
      {
        name: "Affettati della Casa",
        description:
          "Fennel salami, finocchiona, and aged pecorino with honey.",
        price: "24",
      },
      {
        name: "Burrata & Pomodoro",
        description:
          "Warm burrata, heirloom tomatoes, and crushed green olives.",
        price: "22",
      },
    ],
  },
  {
    id: "primi",
    italian: "Primi",
    english: "First course",
    intro: "Pasta and rice shaped by the season.",
    items: [
      {
        name: "Pappardelle al Cinghiale",
        description:
          "Wide ribbons, slow wild-boar ragù, rosemary, and aged Parmigiano.",
        price: "32",
      },
      {
        name: "Pici Cacio e Pepe",
        description:
          "Hand-rolled pici, pecorino di Pienza, and cracked Tellicherry pepper.",
        price: "28",
      },
      {
        name: "Tortelli di Patate",
        description:
          "Potato-filled pasta from Mugello, brown butter, and sage.",
        price: "30",
      },
      {
        name: "Risotto ai Porcini",
        description:
          "Carnaroli rice, dried and fresh porcini, thyme, and bone broth.",
        price: "34",
      },
    ],
  },
  {
    id: "secondi",
    italian: "Secondi",
    english: "Second course",
    intro: "The hearth — meat and fish with little between them and the fire.",
    items: [
      {
        name: "Bistecca alla Fiorentina",
        description:
          "Chianina ribeye, charcoal-grilled, served rare with rosemary salt.",
        price: "68",
        note: "For two · 1.2 kg",
      },
      {
        name: "Tagliata di Manzo",
        description:
          "Sliced grilled beef, wild rocket, and 36-month Parmigiano.",
        price: "42",
      },
      {
        name: "Arista di Maiale",
        description:
          "Roasted pork loin with fennel seed, garlic, and pan juices.",
        price: "38",
      },
      {
        name: "Branzino al Sale",
        description:
          "Whole sea bass baked in salt crust, lemon, and new oil.",
        price: "44",
      },
    ],
  },
  {
    id: "dolci",
    italian: "Dolci",
    english: "To finish",
    intro: "Sweet endings, never loud.",
    items: [
      {
        name: "Cantucci & Vin Santo",
        description:
          "Almond biscuits and a glass of amber Vin Santo for dipping.",
        price: "16",
      },
      {
        name: "Tiramisù della Casa",
        description:
          "Espresso-soaked savoiardi, mascarpone, and dark cacao.",
        price: "18",
      },
      {
        name: "Panna Cotta",
        description:
          "Vanilla cream set soft, with blackberries and olive oil.",
        price: "16",
      },
      {
        name: "Schiacciata con l’Uva",
        description:
          "Seasonal grape focaccia, rosemary sugar, and sea salt.",
        price: "14",
      },
    ],
  },
];

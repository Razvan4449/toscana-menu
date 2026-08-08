export const dinner = {
  name: "VASILIU’S",
  subtitle: "Una Cena in Toscana",
  tagline: "11 amici · un tavolo · troppo cibo",
  guests: 11,
  location: "Somewhere near Siena (allegedly)",
  dateLabel: "Tonight’s masterpiece",
};

export type Ingredient = {
  id: string;
  name: string;
  quantity: string;
  perPerson?: string;
  note?: string;
};

export type CookingStep = {
  id: string;
  scene: string;
  title: string;
  body: string;
  minutes?: number;
};

export type Course = {
  id: string;
  number: string;
  italian: string;
  english: string;
  chapterTitle: string;
  dish: string;
  blurb: string;
  description: string;
  serves: number;
  kcalApprox?: number;
  prepMinutes: number;
  cookMinutes: number;
  chefNote: string;
  ingredients: Ingredient[];
  steps: CookingStep[];
};

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: string;
  note?: string;
  category: ShoppingCategory;
};

export type ShoppingCategory =
  | "cheeses"
  | "meats"
  | "vegetables"
  | "pantry"
  | "dessert"
  | "drinks";

export const shoppingCategories: {
  id: ShoppingCategory;
  label: string;
  joke: string;
}[] = [
  { id: "cheeses", label: "Cheeses", joke: "Yes, this amount of cheese is correct." },
  { id: "meats", label: "Meats", joke: "The dramatic proteins." },
  { id: "vegetables", label: "Vegetables", joke: "For balance. Allegedly." },
  { id: "pantry", label: "Pantry", joke: "The quiet heroes of dinner." },
  { id: "dessert", label: "Dessert", joke: "The sweet finale shopping spree." },
  { id: "drinks", label: "Drinks & extras", joke: "Hydration, celebration, and olive oil emergencies." },
];

export const courses: Course[] = [
  {
    id: "antipasti",
    number: "01",
    italian: "Antipasti",
    english: "To begin",
    chapterTitle: "The Opening Act",
    dish: "Bruschetta & Burrata",
    blurb: "Warm bread, loud tomatoes, soft cheese diplomacy.",
    description:
      "Toasted pane sciocco rubbed with garlic, crowned with ripe tomatoes and basil, beside a ridiculous cloud of burrata. The table goes quiet for exactly four seconds.",
    serves: 11,
    kcalApprox: 320,
    prepMinutes: 25,
    cookMinutes: 10,
    chefNote: "This part looks easy. Act even more confident.",
    ingredients: [
      { id: "a1", name: "Ciabatta or pane sciocco", quantity: "2 large loaves", perPerson: "~2 slices" },
      { id: "a2", name: "Ripe tomatoes", quantity: "1.2 kg", perPerson: "~110 g" },
      { id: "a3", name: "Fresh basil", quantity: "2 big bunches" },
      { id: "a4", name: "Garlic cloves", quantity: "6" },
      { id: "a5", name: "Burrata", quantity: "4 × 125 g", note: "Cold until the last possible second" },
      { id: "a6", name: "Extra virgin olive oil", quantity: "120 ml" },
      { id: "a7", name: "Flaky salt & black pepper", quantity: "to taste" },
    ],
    steps: [
      {
        id: "as1",
        scene: "Scene 1",
        title: "The Tomato Situation",
        body: "Dice tomatoes, tear basil, dress with oil, salt, and pepper. Let them sit and become famous.",
        minutes: 15,
      },
      {
        id: "as2",
        scene: "Scene 2",
        title: "Bread Goes to Drama School",
        body: "Toast thick slices until golden. Rub with cut garlic while still warm. This is non-negotiable.",
        minutes: 10,
      },
      {
        id: "as3",
        scene: "The Beautiful Finale",
        title: "Assemble Like You Mean It",
        body: "Spoon tomatoes onto toast. Plate burrata nearby. Finish with more oil. Pretend you planned the plating.",
        minutes: 5,
      },
    ],
  },
  {
    id: "primo",
    number: "02",
    italian: "Primo",
    english: "The main event",
    chapterTitle: "The Dramatic Main Event",
    dish: "Carbonara Monumentale",
    blurb: "Please do not burn the carbonara. We are watching.",
    description:
      "Silky egg sauce, crispy guanciale, pecorino rain, and enough pasta for eleven vacation-hungry friends. This is the part where we pretend we are professionals.",
    serves: 11,
    kcalApprox: 780,
    prepMinutes: 20,
    cookMinutes: 25,
    chefNote: "If the sauce breaks, we never speak of it again.",
    ingredients: [
      { id: "p1", name: "Spaghetti or tonnarelli", quantity: "1.4 kg", perPerson: "~125 g" },
      { id: "p2", name: "Guanciale", quantity: "550 g", note: "Pancetta only if Nonna is not around" },
      { id: "p3", name: "Egg yolks", quantity: "14", perPerson: "1+ yolk" },
      { id: "p4", name: "Whole eggs", quantity: "4" },
      { id: "p5", name: "Pecorino Romano", quantity: "280 g grated" },
      { id: "p6", name: "Parmigiano Reggiano", quantity: "120 g grated", note: "Optional but deliciously illegal in some villages" },
      { id: "p7", name: "Black pepper", quantity: "lots, freshly cracked" },
      { id: "p8", name: "Salt for pasta water", quantity: "as the sea demands" },
    ],
    steps: [
      {
        id: "ps1",
        scene: "The Setup",
        title: "Crisp the Guanciale",
        body: "Cube guanciale and render slowly until golden and crisp. Keep the fat. This fat is the plot.",
        minutes: 12,
      },
      {
        id: "ps2",
        scene: "Scene 2",
        title: "The Emulsion Rehearsal",
        body: "Whisk yolks, eggs, cheeses, and aggressive black pepper into a thick paste. No cream. Never cream.",
        minutes: 8,
      },
      {
        id: "ps3",
        scene: "The Dangerous Part",
        title: "Pasta Meets Destiny",
        body: "Boil pasta very al dente. Reserve starchy water. Off heat, toss pasta with guanciale fat, then egg mixture, loosening with pasta water until glossy.",
        minutes: 12,
      },
      {
        id: "ps4",
        scene: "The Beautiful Finale",
        title: "Plate Before Panic",
        body: "Serve immediately with more pecorino and pepper. Bow slightly. Accept compliments as if surprised.",
        minutes: 3,
      },
    ],
  },
  {
    id: "dolce",
    number: "03",
    italian: "Dolce",
    english: "To finish",
    chapterTitle: "The Sweet Finale",
    dish: "Panna Cotta al Limone",
    blurb: "No one panic — the panna cotta just needs time.",
    description:
      "Soft lemon cream set like a cloud, with berries and a little honey. Made early so Future Us can look calm and legendary.",
    serves: 11,
    kcalApprox: 310,
    prepMinutes: 20,
    cookMinutes: 10,
    chefNote: "Do not tell Nonna about the gelatin shortcuts.",
    ingredients: [
      { id: "d1", name: "Heavy cream", quantity: "1.5 L" },
      { id: "d2", name: "Whole milk", quantity: "400 ml" },
      { id: "d3", name: "Sugar", quantity: "180 g" },
      { id: "d4", name: "Gelatin sheets", quantity: "14 g (about 7 sheets)" },
      { id: "d5", name: "Lemons (zest + juice)", quantity: "3" },
      { id: "d6", name: "Vanilla", quantity: "1 pod or 2 tsp extract" },
      { id: "d7", name: "Mixed berries", quantity: "700 g" },
      { id: "d8", name: "Honey", quantity: "3 tbsp" },
    ],
    steps: [
      {
        id: "ds1",
        scene: "Scene 1",
        title: "Bloom & Warm",
        body: "Soak gelatin. Warm cream, milk, sugar, lemon zest, and vanilla until steaming — do not boil like a villain.",
        minutes: 10,
      },
      {
        id: "ds2",
        scene: "Scene 2",
        title: "The Quiet Set",
        body: "Dissolve gelatin into the cream. Add a little lemon juice. Strain into cups. Chill at least 4 hours.",
        minutes: 10,
      },
      {
        id: "ds3",
        scene: "The Beautiful Finale",
        title: "Berry Crown",
        body: "Top with berries and honey right before serving. Look modest. You are not modest.",
        minutes: 5,
      },
    ],
  },
];

export const shoppingList: ShoppingItem[] = [
  { id: "s1", name: "Burrata", quantity: "4 × 125 g", category: "cheeses" },
  { id: "s2", name: "Pecorino Romano", quantity: "300 g", category: "cheeses", note: "For grating" },
  { id: "s3", name: "Parmigiano Reggiano", quantity: "150 g", category: "cheeses" },
  { id: "s4", name: "Guanciale", quantity: "550 g", category: "meats", note: "Or pancetta in emergencies" },
  { id: "s5", name: "Ripe tomatoes", quantity: "1.2 kg", category: "vegetables" },
  { id: "s6", name: "Fresh basil", quantity: "2 bunches", category: "vegetables" },
  { id: "s7", name: "Garlic", quantity: "1 head", category: "vegetables" },
  { id: "s8", name: "Lemons", quantity: "3", category: "vegetables" },
  { id: "s9", name: "Mixed berries", quantity: "700 g", category: "vegetables" },
  { id: "s10", name: "Ciabatta / pane sciocco", quantity: "2 loaves", category: "pantry" },
  { id: "s11", name: "Spaghetti or tonnarelli", quantity: "1.4 kg", category: "pantry" },
  { id: "s12", name: "Eggs", quantity: "18", category: "pantry", note: "Need many yolks" },
  { id: "s13", name: "Extra virgin olive oil", quantity: "1 bottle", category: "pantry" },
  { id: "s14", name: "Flaky salt & black pepper", quantity: "check pantry", category: "pantry" },
  { id: "s15", name: "Sugar", quantity: "200 g", category: "dessert" },
  { id: "s16", name: "Gelatin sheets", quantity: "14 g", category: "dessert" },
  { id: "s17", name: "Vanilla", quantity: "1 pod or extract", category: "dessert" },
  { id: "s18", name: "Honey", quantity: "1 small jar", category: "dessert" },
  { id: "s19", name: "Heavy cream", quantity: "1.5 L", category: "dessert" },
  { id: "s20", name: "Whole milk", quantity: "400 ml", category: "dessert" },
  { id: "s21", name: "Chianti or Vernaccia", quantity: "3–4 bottles", category: "drinks", note: "For courage" },
  { id: "s22", name: "Sparkling water", quantity: "lots", category: "drinks" },
];

export type TimelineBeat = {
  id: string;
  time: string;
  title: string;
  detail: string;
  icon: "dessert" | "chop" | "fire" | "plate" | "feast";
};

export const timeline: TimelineBeat[] = [
  {
    id: "t1",
    time: "14:00",
    title: "Dessert prep",
    detail: "Panna cotta goes into the fridge. Future Us says grazie.",
    icon: "dessert",
  },
  {
    id: "t2",
    time: "17:00",
    title: "Ingredient prep",
    detail: "Chop tomatoes, grate cheese, cube guanciale. Put on music.",
    icon: "chop",
  },
  {
    id: "t3",
    time: "18:00",
    title: "Main dish cooking",
    detail: "Carbonara hour. Focus. Breathe. No cream jokes.",
    icon: "fire",
  },
  {
    id: "t4",
    time: "19:30",
    title: "Plating",
    detail: "Bruschetta assembled, pasta glossy, table somehow elegant.",
    icon: "plate",
  },
  {
    id: "t5",
    time: "20:00",
    title: "Dinner",
    detail: "Buon appetito. Phones down. Stories up.",
    icon: "feast",
  },
];

export const cookingSequence = [
  ...courses[2].steps.map((step) => ({ ...step, courseId: "dolce", courseName: "Panna Cotta" })),
  ...courses[0].steps.map((step) => ({ ...step, courseId: "antipasti", courseName: "Bruschetta & Burrata" })),
  ...courses[1].steps.map((step) => ({ ...step, courseId: "primo", courseName: "Carbonara Monumentale" })),
];

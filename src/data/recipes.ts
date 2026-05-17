import type { ImageMetadata } from 'astro';

const foodImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/food/*.jpg',
  { eager: true },
);

function img(name: string): ImageMetadata {
  const key = `../assets/food/${name}.jpg`;
  const mod = foodImages[key];
  if (!mod) throw new Error(`Food image not found: ${key}`);
  return mod.default;
}

export type MealSlot = 'breakfast' | 'lunch' | 'dinner';

export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Ingredient {
  qty: string;
  item: string;
  /** Category used for the shopping-list grouping. */
  aisle: 'produce' | 'protein' | 'dairy' | 'pantry' | 'grains' | 'frozen';
}

export interface Recipe {
  slug: string;
  title: string;
  blurb: string;
  slot: MealSlot;
  image: ImageMetadata;
  imageAlt: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  macros: Macros;
  ingredients: Ingredient[];
  steps: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    slug: 'avocado-toast-poached-egg',
    title: 'Avocado Toast with Poached Egg',
    blurb: 'Sourdough, lemony smashed avocado, and a runny yolk. A breakfast that earns its place in the rotation.',
    slot: 'breakfast',
    image: img('avocado-toast'),
    imageAlt: 'Two slices of sourdough toast topped with smashed avocado and a halved poached egg, photographed from above on a linen napkin.',
    prepMinutes: 5,
    cookMinutes: 5,
    servings: 1,
    macros: { calories: 410, protein: 18, carbs: 36, fat: 22 },
    ingredients: [
      { qty: '2 slices', item: 'whole-grain sourdough', aisle: 'pantry' },
      { qty: '1', item: 'ripe avocado', aisle: 'produce' },
      { qty: '1', item: 'large egg', aisle: 'dairy' },
      { qty: '1/2', item: 'lemon, juiced', aisle: 'produce' },
      { qty: '1 pinch', item: 'flaky sea salt', aisle: 'pantry' },
      { qty: '1 pinch', item: 'red-pepper flakes', aisle: 'pantry' },
    ],
    steps: [
      'Toast the sourdough until deep golden and crisp at the edges.',
      'Halve the avocado, scoop into a bowl, add lemon juice, and mash with a fork — leave it a little chunky.',
      'Bring a small saucepan of water to a low simmer. Crack the egg into a ramekin, swirl the water, and slide the egg in. Cook 3 minutes for a soft yolk.',
      'Spread the avocado over the toast. Lift the egg out with a slotted spoon, let it drain, and place on top.',
      'Finish with flaky salt and a pinch of red-pepper flakes.',
    ],
    tags: ['breakfast', 'vegetarian', '15-min'],
  },
  {
    slug: 'overnight-oats-berry',
    title: 'Overnight Oats with Berries & Almond',
    blurb: 'Five minutes the night before, breakfast handled. Creamy oats, sweet berries, a hit of toasted almond.',
    slot: 'breakfast',
    image: img('overnight-oats'),
    imageAlt: 'A glass jar of overnight oats topped with raspberries, blueberries, and sliced almonds on a wooden cutting board.',
    prepMinutes: 5,
    cookMinutes: 0,
    servings: 1,
    macros: { calories: 380, protein: 16, carbs: 52, fat: 12 },
    ingredients: [
      { qty: '1/2 cup', item: 'rolled oats', aisle: 'grains' },
      { qty: '3/4 cup', item: 'unsweetened almond milk', aisle: 'dairy' },
      { qty: '2 tbsp', item: 'plain Greek yogurt', aisle: 'dairy' },
      { qty: '1 tsp', item: 'maple syrup', aisle: 'pantry' },
      { qty: '1/2 cup', item: 'mixed berries', aisle: 'produce' },
      { qty: '1 tbsp', item: 'sliced toasted almonds', aisle: 'pantry' },
    ],
    steps: [
      'Combine oats, almond milk, yogurt, and maple syrup in a jar. Stir well.',
      'Cover and refrigerate overnight — at least 6 hours.',
      'In the morning, give it a stir. Loosen with a splash more milk if you like it thinner.',
      'Top with berries and almonds and eat from the jar.',
    ],
    tags: ['breakfast', 'meal-prep', 'no-cook'],
  },
  {
    slug: 'greek-yogurt-parfait',
    title: 'Greek Yogurt Parfait',
    blurb: 'High-protein and quietly indulgent. Honey, granola, and whatever fruit is at its best this week.',
    slot: 'breakfast',
    image: img('yogurt-parfait'),
    imageAlt: 'A tall glass parfait layered with Greek yogurt, granola, and fresh berries.',
    prepMinutes: 5,
    cookMinutes: 0,
    servings: 1,
    macros: { calories: 340, protein: 22, carbs: 44, fat: 8 },
    ingredients: [
      { qty: '1 cup', item: 'plain 2% Greek yogurt', aisle: 'dairy' },
      { qty: '1/3 cup', item: 'low-sugar granola', aisle: 'pantry' },
      { qty: '1/2 cup', item: 'seasonal berries', aisle: 'produce' },
      { qty: '1 tsp', item: 'raw honey', aisle: 'pantry' },
    ],
    steps: [
      'Spoon half the yogurt into a glass or small bowl.',
      'Add half the granola and half the berries.',
      'Repeat with the remaining yogurt, granola, and berries.',
      'Drizzle with honey and serve immediately so the granola stays crunchy.',
    ],
    tags: ['breakfast', '5-min', 'high-protein'],
  },
  {
    slug: 'mediterranean-grain-bowl',
    title: 'Mediterranean Grain Bowl',
    blurb: 'Warm farro, lemony chickpeas, cucumber, olives, and a generous spoon of tzatziki. Lunch that holds up to a 3pm meeting.',
    slot: 'lunch',
    image: img('grain-bowl'),
    imageAlt: 'A wide bowl with farro, chickpeas, cucumber, kalamata olives, cherry tomatoes, and a swirl of tzatziki.',
    prepMinutes: 10,
    cookMinutes: 20,
    servings: 2,
    macros: { calories: 520, protein: 20, carbs: 68, fat: 18 },
    ingredients: [
      { qty: '1 cup', item: 'farro, cooked', aisle: 'grains' },
      { qty: '1 can (15 oz)', item: 'chickpeas, drained', aisle: 'pantry' },
      { qty: '1', item: 'English cucumber, diced', aisle: 'produce' },
      { qty: '1 cup', item: 'cherry tomatoes, halved', aisle: 'produce' },
      { qty: '1/3 cup', item: 'kalamata olives', aisle: 'pantry' },
      { qty: '1/2 cup', item: 'tzatziki', aisle: 'dairy' },
      { qty: '2 tbsp', item: 'extra-virgin olive oil', aisle: 'pantry' },
      { qty: '1', item: 'lemon, juiced', aisle: 'produce' },
    ],
    steps: [
      'Cook the farro according to the package, drain, and let cool slightly.',
      'Toss the chickpeas with olive oil, lemon juice, salt, and pepper.',
      'Build two bowls: farro at the base, then chickpeas, cucumber, tomatoes, and olives in neat sections.',
      'Finish each bowl with a generous spoon of tzatziki and an extra squeeze of lemon.',
    ],
    tags: ['lunch', 'vegetarian', 'meal-prep'],
  },
  {
    slug: 'lemon-chicken-salad',
    title: 'Lemon Herb Chicken Salad',
    blurb: 'Bright, herby, and crisp. Built around leftover roast chicken — or a quick pan-sear if you are starting from scratch.',
    slot: 'lunch',
    image: img('chicken-salad'),
    imageAlt: 'A bowl of mixed greens topped with sliced grilled chicken, red onion, and a lemon wedge.',
    prepMinutes: 10,
    cookMinutes: 8,
    servings: 2,
    macros: { calories: 430, protein: 38, carbs: 14, fat: 24 },
    ingredients: [
      { qty: '2', item: 'boneless skinless chicken breasts', aisle: 'protein' },
      { qty: '4 cups', item: 'mixed baby greens', aisle: 'produce' },
      { qty: '1/4', item: 'red onion, thinly sliced', aisle: 'produce' },
      { qty: '1/4 cup', item: 'fresh dill and parsley', aisle: 'produce' },
      { qty: '3 tbsp', item: 'extra-virgin olive oil', aisle: 'pantry' },
      { qty: '1', item: 'lemon, juiced and zested', aisle: 'produce' },
      { qty: '1 tsp', item: 'Dijon mustard', aisle: 'pantry' },
    ],
    steps: [
      'Pat the chicken dry, season with salt and pepper, and sear in a hot pan with a little oil — about 4 minutes per side. Rest 5 minutes, then slice.',
      'Whisk lemon juice, zest, Dijon, and olive oil with a pinch of salt.',
      'Toss greens, onion, and herbs with two-thirds of the dressing.',
      'Top with sliced chicken and drizzle with the remaining dressing.',
    ],
    tags: ['lunch', 'high-protein', 'gluten-free'],
  },
  {
    slug: 'roasted-veggie-wrap',
    title: 'Roasted Vegetable & Hummus Wrap',
    blurb: 'Charred peppers, soft zucchini, and a thick smear of hummus rolled into a warm whole-wheat wrap.',
    slot: 'lunch',
    image: img('veggie-wrap'),
    imageAlt: 'A whole-wheat wrap sliced in half on parchment paper, showing roasted vegetables and hummus inside.',
    prepMinutes: 10,
    cookMinutes: 20,
    servings: 2,
    macros: { calories: 460, protein: 14, carbs: 60, fat: 18 },
    ingredients: [
      { qty: '2', item: 'large whole-wheat wraps', aisle: 'grains' },
      { qty: '1', item: 'red bell pepper, sliced', aisle: 'produce' },
      { qty: '1', item: 'zucchini, sliced', aisle: 'produce' },
      { qty: '1/2', item: 'red onion, sliced', aisle: 'produce' },
      { qty: '1/2 cup', item: 'hummus', aisle: 'dairy' },
      { qty: '1 cup', item: 'baby spinach', aisle: 'produce' },
      { qty: '2 tbsp', item: 'olive oil', aisle: 'pantry' },
    ],
    steps: [
      'Heat the oven to 425°F (220°C). Toss the peppers, zucchini, and onion with olive oil, salt, and pepper. Roast on a sheet pan for 18–20 minutes until charred at the edges.',
      'Warm the wraps in a dry pan for 20 seconds per side so they fold without cracking.',
      'Spread each wrap with hummus, layer in spinach and the roasted vegetables.',
      'Roll tightly, slice on the diagonal, and serve.',
    ],
    tags: ['lunch', 'vegan', 'meal-prep'],
  },
  {
    slug: 'salmon-asparagus',
    title: 'Pan-Seared Salmon with Asparagus',
    blurb: 'Crisp skin, silky inside. The whole dinner is on the table in under twenty minutes.',
    slot: 'dinner',
    image: img('salmon-asparagus'),
    imageAlt: 'A pan-seared salmon fillet on a white plate next to roasted asparagus spears and a lemon wedge.',
    prepMinutes: 5,
    cookMinutes: 12,
    servings: 2,
    macros: { calories: 540, protein: 42, carbs: 12, fat: 34 },
    ingredients: [
      { qty: '2 (6 oz)', item: 'salmon fillets, skin on', aisle: 'protein' },
      { qty: '1 bunch', item: 'asparagus, ends trimmed', aisle: 'produce' },
      { qty: '2 tbsp', item: 'olive oil', aisle: 'pantry' },
      { qty: '2 cloves', item: 'garlic, sliced', aisle: 'produce' },
      { qty: '1', item: 'lemon', aisle: 'produce' },
      { qty: '1 pinch', item: 'flaky sea salt', aisle: 'pantry' },
    ],
    steps: [
      'Pat the salmon very dry and season the skin generously with salt.',
      'Heat a cast-iron pan over medium-high with a tablespoon of oil. Lay the salmon skin-side down and press gently for 30 seconds. Cook undisturbed for 5 minutes.',
      'Flip the salmon and cook another 2–3 minutes for medium. Squeeze half the lemon over the top and rest.',
      'In the same pan, add the rest of the oil, garlic, and asparagus. Toss for 3–4 minutes until just tender and bright green.',
      'Plate the salmon with the asparagus and finish with the remaining lemon and flaky salt.',
    ],
    tags: ['dinner', 'high-protein', 'gluten-free'],
  },
  {
    slug: 'tofu-stir-fry',
    title: 'Crispy Tofu Stir-Fry with Ginger Soy',
    blurb: 'Golden tofu, snappy veg, and a sticky ginger-soy glaze over rice. Quick weeknight food that does not feel like a compromise.',
    slot: 'dinner',
    image: img('tofu-stirfry'),
    imageAlt: 'A black skillet with cubes of crispy tofu, broccoli, red pepper, and a glossy sauce, garnished with sesame seeds.',
    prepMinutes: 15,
    cookMinutes: 15,
    servings: 2,
    macros: { calories: 510, protein: 26, carbs: 58, fat: 20 },
    ingredients: [
      { qty: '1 block (14 oz)', item: 'extra-firm tofu', aisle: 'protein' },
      { qty: '1 head', item: 'broccoli, cut into florets', aisle: 'produce' },
      { qty: '1', item: 'red bell pepper, sliced', aisle: 'produce' },
      { qty: '1 tbsp', item: 'fresh ginger, grated', aisle: 'produce' },
      { qty: '3 tbsp', item: 'low-sodium soy sauce', aisle: 'pantry' },
      { qty: '1 tbsp', item: 'rice vinegar', aisle: 'pantry' },
      { qty: '2 tsp', item: 'maple syrup', aisle: 'pantry' },
      { qty: '1 cup', item: 'jasmine rice', aisle: 'grains' },
      { qty: '2 tbsp', item: 'neutral oil', aisle: 'pantry' },
    ],
    steps: [
      'Press the tofu for 10 minutes between paper towels under something heavy. Cut into 1-inch cubes.',
      'Start the rice in a separate pot per the package directions.',
      'Heat the oil in a large skillet over medium-high. Add the tofu in a single layer and cook undisturbed for 4 minutes per side until deeply golden.',
      'Push tofu aside, add broccoli and pepper. Stir-fry for 4 minutes until crisp-tender.',
      'Whisk soy, vinegar, maple, and ginger. Pour into the pan and toss everything to coat. Cook 1 more minute until glossy.',
      'Serve over rice with a sprinkle of sesame seeds.',
    ],
    tags: ['dinner', 'vegan', 'high-protein'],
  },
  {
    slug: 'sheet-pan-chicken-sweet-potato',
    title: 'Sheet-Pan Chicken & Sweet Potato',
    blurb: 'One pan, one timer, dinner. Smoky paprika chicken next to caramelized sweet potatoes and red onion.',
    slot: 'dinner',
    image: img('sheet-pan-chicken'),
    imageAlt: 'A sheet pan with seasoned chicken thighs, roasted sweet potato wedges, and red onion slices.',
    prepMinutes: 10,
    cookMinutes: 30,
    servings: 4,
    macros: { calories: 580, protein: 38, carbs: 44, fat: 26 },
    ingredients: [
      { qty: '6', item: 'bone-in chicken thighs', aisle: 'protein' },
      { qty: '2 large', item: 'sweet potatoes, cut in wedges', aisle: 'produce' },
      { qty: '1', item: 'red onion, cut in wedges', aisle: 'produce' },
      { qty: '3 tbsp', item: 'olive oil', aisle: 'pantry' },
      { qty: '2 tsp', item: 'smoked paprika', aisle: 'pantry' },
      { qty: '1 tsp', item: 'garlic powder', aisle: 'pantry' },
      { qty: '1 tsp', item: 'kosher salt', aisle: 'pantry' },
      { qty: '1/2 tsp', item: 'black pepper', aisle: 'pantry' },
    ],
    steps: [
      'Heat the oven to 425°F (220°C).',
      'Toss the sweet potatoes and onion with 2 tablespoons olive oil, salt, and pepper. Spread on a sheet pan and roast for 10 minutes.',
      'Meanwhile, rub the chicken with the remaining oil, paprika, garlic powder, salt, and pepper.',
      'Pull the pan out, push the vegetables aside, and nestle the chicken skin-side up. Return to the oven for 22–25 minutes until the chicken hits 175°F at the bone.',
      'Rest 5 minutes before serving.',
    ],
    tags: ['dinner', 'meal-prep', 'gluten-free'],
  },
  {
    slug: 'black-bean-tacos',
    title: 'Black Bean Tacos with Quick Slaw',
    blurb: 'Weeknight tacos done right — warm corn tortillas, spiced black beans, and a crunchy cabbage slaw.',
    slot: 'dinner',
    image: img('bean-tacos'),
    imageAlt: 'Three corn tortillas filled with seasoned black beans, cabbage slaw, and lime wedges on a wooden board.',
    prepMinutes: 10,
    cookMinutes: 10,
    servings: 2,
    macros: { calories: 480, protein: 18, carbs: 70, fat: 14 },
    ingredients: [
      { qty: '1 can (15 oz)', item: 'black beans, rinsed', aisle: 'pantry' },
      { qty: '6', item: 'corn tortillas', aisle: 'pantry' },
      { qty: '2 cups', item: 'shredded green cabbage', aisle: 'produce' },
      { qty: '1', item: 'lime, juiced', aisle: 'produce' },
      { qty: '1/4 cup', item: 'fresh cilantro', aisle: 'produce' },
      { qty: '1', item: 'avocado, sliced', aisle: 'produce' },
      { qty: '1 tsp', item: 'cumin', aisle: 'pantry' },
      { qty: '1 tsp', item: 'smoked paprika', aisle: 'pantry' },
      { qty: '2 tbsp', item: 'olive oil', aisle: 'pantry' },
    ],
    steps: [
      'Warm the beans in a small saucepan with 1 tablespoon olive oil, cumin, paprika, and a pinch of salt. Mash slightly with a fork.',
      'Toss the cabbage with lime juice, cilantro, the remaining oil, and a pinch of salt.',
      'Char the tortillas directly over a gas flame or in a dry pan for 20 seconds per side.',
      'Build each taco: beans, slaw, a slice of avocado, and an extra squeeze of lime.',
    ],
    tags: ['dinner', 'vegan', '30-min'],
  },
];

export const recipesBySlug = new Map(recipes.map((r) => [r.slug, r]));

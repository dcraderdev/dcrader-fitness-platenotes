import type { MealSlot } from './recipes';

export interface DayPlan {
  day: string;
  date: string;
  /** Recipe slugs for each slot; null means rest/leftovers day. */
  meals: Record<MealSlot, string | null>;
  note?: string;
}

export const weeklyPlan: DayPlan[] = [
  {
    day: 'Monday',
    date: 'May 18',
    meals: {
      breakfast: 'avocado-toast-poached-egg',
      lunch: 'mediterranean-grain-bowl',
      dinner: 'salmon-asparagus',
    },
  },
  {
    day: 'Tuesday',
    date: 'May 19',
    meals: {
      breakfast: 'overnight-oats-berry',
      lunch: 'lemon-chicken-salad',
      dinner: 'tofu-stir-fry',
    },
  },
  {
    day: 'Wednesday',
    date: 'May 20',
    meals: {
      breakfast: 'greek-yogurt-parfait',
      lunch: 'roasted-veggie-wrap',
      dinner: 'sheet-pan-chicken-sweet-potato',
    },
  },
  {
    day: 'Thursday',
    date: 'May 21',
    meals: {
      breakfast: 'avocado-toast-poached-egg',
      lunch: 'mediterranean-grain-bowl',
      dinner: 'black-bean-tacos',
    },
  },
  {
    day: 'Friday',
    date: 'May 22',
    meals: {
      breakfast: 'overnight-oats-berry',
      lunch: 'lemon-chicken-salad',
      dinner: 'salmon-asparagus',
    },
  },
  {
    day: 'Saturday',
    date: 'May 23',
    meals: {
      breakfast: 'greek-yogurt-parfait',
      lunch: 'roasted-veggie-wrap',
      dinner: 'sheet-pan-chicken-sweet-potato',
    },
  },
  {
    day: 'Sunday',
    date: 'May 24',
    meals: { breakfast: null, lunch: null, dinner: null },
    note: 'Flex day — leftovers, a long walk, and a real meal out if you want one.',
  },
];

export const weekRange = 'May 18 – May 24, 2026';

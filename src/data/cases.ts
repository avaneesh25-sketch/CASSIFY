export interface CaseItem {
  id: number;
  label: string;
  theme: 'coffee' | 'growth' | 'strategy';
  categoryNumber: string;
  categoryName?: string;
  titleHeadline: string;
  titleItalic: string;
  coverBadge: string;
  title: string;
  brief: string;
  level: string;
  duration: string;
  isFree: boolean;
  xp: number;
  choices: string[];
  answer: number;
  feedback: string;
}

export const CASES_DATA: CaseItem[] = [
  {
    id: 0,
    label: 'LEVEL 01 · FREE SAMPLE · 15 MIN',
    theme: 'coffee',
    categoryNumber: '01 / CONSUMER & RETAIL',
    titleHeadline: 'The daily',
    titleItalic: 'grind.',
    coverBadge: 'REVENUE ↑ · PROFIT ↓',
    title: 'The coffee shop conundrum',
    brief: 'Campus café Bean & Co increased monthly revenue from ₹4 lakh to ₹5 lakh, but its profit fell from ₹80,000 to ₹50,000. The owner added delivery and introduced discounts. What would you investigate first?',
    level: 'LEVEL 01',
    duration: '15 MIN',
    isFree: true,
    xp: 100,
    choices: [
      'Compare revenue and costs by channel and product.',
      'Open a second location to increase total revenue.',
      'Cut all drink prices to attract more students.'
    ],
    answer: 0,
    feedback: 'Start with unit economics. Profit margin fell from 20% to 10%. Separate delivery fees, discounts, ingredient costs, and sales mix before recommending a fix.'
  },
  {
    id: 1,
    label: 'LEVEL 02 · FREE SAMPLE · 25 MIN',
    theme: 'growth',
    categoryNumber: '02 / GROWTH STRATEGY',
    titleHeadline: 'Next stop:',
    titleItalic: 'everywhere.',
    coverBadge: 'ONE CITY. THREE POSSIBILITIES.',
    title: 'A new city. A big decision.',
    brief: 'A delivery startup can enter one of three cities. City A has a large market and strong competitors. City B has a smaller market and high order density. City C is growing quickly but has expensive delivery routes. What should guide the decision?',
    level: 'LEVEL 02',
    duration: '25 MIN',
    isFree: true,
    xp: 200,
    choices: [
      'Pick the city with the largest population.',
      'Compare demand, contribution margin, competition, and launch costs.',
      'Choose the fastest-growing city regardless of cost.'
    ],
    answer: 1,
    feedback: 'Build a comparable model for all three markets. Demand alone does not make a strong expansion: order density, acquisition cost, and contribution margin can change the answer.'
  },
  {
    id: 2,
    label: 'LEVEL 03 · PREMIUM BRIEF PREVIEW · 40 MIN',
    theme: 'strategy',
    categoryNumber: '03 / BUSINESS STRATEGY',
    titleHeadline: 'Change',
    titleItalic: 'the game.',
    coverBadge: 'ADAPT. DIFFERENTIATE. WIN.',
    title: 'The challenger’s playbook',
    brief: 'A regional fitness chain is losing members to a low-cost app. Membership is down 12%, while its most loyal segment values coaching and community. How would you frame the strategic response?',
    level: 'LEVEL 03',
    duration: '40 MIN',
    isFree: false,
    xp: 350,
    choices: [
      'Match the app’s price immediately.',
      'Launch every digital feature competitors offer.',
      'Segment customers and test a differentiated coaching proposition.'
    ],
    answer: 2,
    feedback: 'Begin by understanding which customers are leaving and why. Test whether coaching and community justify a differentiated offer before committing to a broad price cut.'
  }
];

export interface LevelItem {
  id: number;
  levelNumber: string;
  tier: 'FREE' | 'PREMIUM';
  title: string;
  subtitle: string;
  footLabel: string;
  description: string;
}

export const LEVELS_DATA: LevelItem[] = [
  {
    id: 0,
    levelNumber: '01',
    tier: 'FREE',
    title: 'The Rookie',
    subtitle: 'Learn to ask the right questions.',
    footLabel: 'Problem framing',
    description: 'Break a messy business problem into a clear structure. Start with short cases and build your first problem tree.'
  },
  {
    id: 1,
    levelNumber: '02',
    tier: 'FREE',
    title: 'The Analyst',
    subtitle: 'Find the story behind the numbers.',
    footLabel: 'Data & insight',
    description: 'Translate data into decisions. Practice market sizing, unit economics, and the insights that change a recommendation.'
  },
  {
    id: 2,
    levelNumber: '03',
    tier: 'PREMIUM',
    title: 'The Strategist',
    subtitle: 'Make your next move count.',
    footLabel: 'Business strategy',
    description: 'Weigh trade-offs and choose a direction. Explore growth, positioning, and competitive strategy with advanced cases.'
  },
  {
    id: 3,
    levelNumber: '04',
    tier: 'PREMIUM',
    title: 'The Contender',
    subtitle: 'Bring it all to the competition.',
    footLabel: 'Full case simulations',
    description: 'Pull your skills together in longer competition-style briefs. Build a structured argument and defend your recommendation.'
  }
];

export interface LeaderboardEntry {
  rank: string;
  name: string;
  xp: number;
  avatarColor: string;
  initials: string;
}

export const COHORT_LEADERS: LeaderboardEntry[] = [
  { rank: '01', name: 'Aarav K.', xp: 920, avatarColor: '#f0d9c3', initials: 'AK' },
  { rank: '02', name: 'Sana M.', xp: 810, avatarColor: '#dcd5ee', initials: 'SM' }
];

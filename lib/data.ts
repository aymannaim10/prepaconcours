// ============================================
// Core data for the Concours Médecine Platform
// Prof. Yasmine – UM6SS, Morocco
// ============================================

export const YEARS = Array.from({ length: 12 }, (_, i) => 2025 - i)

export type CategoryId = 'real-exam' | 'tips-tricks' | 'revision-series' | 'course-recap'

export interface Category {
  id: CategoryId
  label: string
  description: string
  icon: string
  color: string
  accentColor: string
  bgGlow: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'real-exam',
    label: 'The Real Exam',
    description: 'Official entrance examination papers with full marking scheme and model answers',
    icon: '📋',
    color: '#C9A84C',
    accentColor: '#E8C96A',
    bgGlow: 'rgba(201, 168, 76, 0.15)',
  },
  {
    id: 'tips-tricks',
    label: 'Tips & Tricks',
    description: 'Strategic insights, mnemonics and proven techniques to maximize your score',
    icon: '💡',
    color: '#4CADE8',
    accentColor: '#6AC9E8',
    bgGlow: 'rgba(76, 173, 232, 0.15)',
  },
  {
    id: 'revision-series',
    label: 'Revision Series',
    description: 'Curated practice sets and topic-specific exercises for deep mastery',
    icon: '📚',
    color: '#7C4CE8',
    accentColor: '#A06AE8',
    bgGlow: 'rgba(124, 76, 232, 0.15)',
  },
  {
    id: 'course-recap',
    label: 'Course Recap',
    description: 'Concise summaries of key mathematical concepts required for the exam',
    icon: '📖',
    color: '#4CE87C',
    accentColor: '#6AE89A',
    bgGlow: 'rgba(76, 232, 124, 0.15)',
  },
]

export interface YearMeta {
  year: number
  badge?: 'new' | 'popular' | 'classic'
  totalDocs: number
  difficulty: 'intermediate' | 'advanced' | 'expert'
}

export const YEAR_META: Record<number, YearMeta> = {
  2025: { year: 2025, badge: 'new', totalDocs: 12, difficulty: 'expert' },
  2024: { year: 2024, badge: 'popular', totalDocs: 16, difficulty: 'expert' },
  2023: { year: 2023, badge: 'popular', totalDocs: 16, difficulty: 'advanced' },
  2022: { year: 2022, totalDocs: 16, difficulty: 'advanced' },
  2021: { year: 2021, totalDocs: 14, difficulty: 'advanced' },
  2020: { year: 2020, totalDocs: 14, difficulty: 'advanced' },
  2019: { year: 2019, totalDocs: 14, difficulty: 'intermediate' },
  2018: { year: 2018, totalDocs: 12, difficulty: 'intermediate' },
  2017: { year: 2017, totalDocs: 12, difficulty: 'intermediate' },
  2016: { year: 2016, totalDocs: 12, difficulty: 'intermediate' },
  2015: { year: 2015, totalDocs: 10, difficulty: 'intermediate' },
  2014: { year: 2014, totalDocs: 10, difficulty: 'intermediate' },
}

export const STATS = [
  { value: '12', label: 'Years of Exams', sublabel: '2014 – 2025' },
  { value: '4', label: 'Resource Types', sublabel: 'Per Year' },
  { value: '500+', label: 'Students', sublabel: 'Helped to succeed' },
  { value: '98%', label: 'Success Rate', sublabel: 'First attempt' },
]

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}

export function getYearMeta(year: number): YearMeta {
  return YEAR_META[year] ?? { year, totalDocs: 12, difficulty: 'intermediate' }
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { YEARS, CATEGORIES, getCategoryById } from '@/lib/data'
import CategoryPageClient from './CategoryPageClient'

interface Props {
  params: Promise<{ year: string; category: string }>
}

export async function generateStaticParams() {
  const params = []
  for (const year of YEARS) {
    for (const cat of CATEGORIES) {
      params.push({ year: String(year), category: cat.id })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, category } = await params
  const cat = getCategoryById(category)
  if (!cat) return { title: 'Not Found' }
  return {
    title: `${cat.label} ${year} | Prof. Yasmine – UM6SS`,
    description: `${cat.description} — ${year} medical entrance exam resources by Prof. Yasmine at UM6SS Morocco.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { year: yearStr, category: categoryId } = await params
  const year = parseInt(yearStr)
  const category = getCategoryById(categoryId)

  if (!YEARS.includes(year) || !category) notFound()

  return <CategoryPageClient year={year} categoryId={categoryId} />
}

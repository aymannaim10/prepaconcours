'use client'

import type { QuestionVisualization as Viz } from '@/lib/exam-data'
import AffineRecurrenceChart from './AffineRecurrenceChart'

export default function QuestionVisualization({ viz }: { viz: Viz }) {
  if (viz.type === 'affine-recurrence') {
    return (
      <AffineRecurrenceChart
        a={viz.a}
        b={viz.b}
        u0={viz.u0}
        steps={viz.steps}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  return null
}

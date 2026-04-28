'use client'

import type { QuestionVisualization as Viz } from '@/lib/exam-data'
import AffineRecurrenceChart from './AffineRecurrenceChart'
import FunctionPlot2024Ex7 from './FunctionPlot2024Ex7'
import LocusPlot2023Ex6 from './LocusPlot2023Ex6'
import HyperbolaPlot2023Ex7 from './HyperbolaPlot2023Ex7'
import CircleLocusPlot from './CircleLocusPlot'
import CubicRootsPlot from './CubicRootsPlot'

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
  if (viz.type === 'function-plot' && viz.preset === 'f-2024-ex7') {
    return <FunctionPlot2024Ex7 title={viz.title} description={viz.description} />
  }
  if (viz.type === 'function-plot' && viz.preset === 'cubic-2019-ex15') {
    return <CubicRootsPlot title={viz.title} description={viz.description} />
  }
  if (viz.type === 'locus-2d' && viz.preset === 'lines-2023-ex6') {
    return <LocusPlot2023Ex6 title={viz.title} description={viz.description} />
  }
  if (viz.type === 'locus-2d' && viz.preset === 'hyperbola-2023-ex7') {
    return <HyperbolaPlot2023Ex7 title={viz.title} description={viz.description} />
  }
  if (viz.type === 'circle-locus') {
    return (
      <CircleLocusPlot
        cx={viz.cx}
        cy={viz.cy}
        R={viz.R}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  return null
}

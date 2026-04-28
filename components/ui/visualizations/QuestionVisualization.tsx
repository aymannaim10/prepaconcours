'use client'

import type { QuestionVisualization as Viz } from '@/lib/exam-data'
import AffineRecurrenceChart from './AffineRecurrenceChart'
import FunctionPlot2024Ex7 from './FunctionPlot2024Ex7'
import LocusPlot2023Ex6 from './LocusPlot2023Ex6'
import HyperbolaPlot2023Ex7 from './HyperbolaPlot2023Ex7'
import CircleLocusPlot from './CircleLocusPlot'
import CubicRootsPlot from './CubicRootsPlot'
import BinomialPmfChart from './BinomialPmfChart'
import VennDiagram2Sets from './VennDiagram2Sets'
import ProbabilityBreakdown from './ProbabilityBreakdown'
import UrnTreeDiagram from './UrnTreeDiagram'
import BinomialArrangements from './BinomialArrangements'

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
  if (viz.type === 'binomial-pmf') {
    return (
      <BinomialPmfChart
        n={viz.n}
        p={viz.p}
        k={viz.k}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  if (viz.type === 'venn-2-sets') {
    return (
      <VennDiagram2Sets
        pA={viz.pA}
        pB={viz.pB}
        pAandB={viz.pAandB}
        labelA={viz.labelA}
        labelB={viz.labelB}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  if (viz.type === 'prob-breakdown') {
    return (
      <ProbabilityBreakdown
        total={viz.total}
        items={viz.items}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  if (viz.type === 'urn-tree') {
    return (
      <UrnTreeDiagram
        balls={viz.balls}
        withReplacement={viz.withReplacement}
        favorable={viz.favorable}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  if (viz.type === 'binomial-arrangements') {
    return (
      <BinomialArrangements
        n={viz.n}
        p={viz.p}
        k={viz.k}
        successLabel={viz.successLabel}
        failureLabel={viz.failureLabel}
        successIcon={viz.successIcon}
        failureIcon={viz.failureIcon}
        title={viz.title}
        description={viz.description}
      />
    )
  }
  return null
}

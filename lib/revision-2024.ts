import type { ExamData } from './exam-data'

export const REVISION_2024: ExamData = {
  year: 2024,
  date: 'Série de Révision 2024',
  duration: 40,
  categoryId: 'revision-series',
  title: `Série de Révision — Entraînement type Concours 2024`,
  instructions: `Ces exercices sont similaires au vrai concours. Entraînez-vous en conditions réelles : 40 min, sans calculatrice.`,
  questions: [
    {
      number: 1, exercise: 1, topic: 'Suites numériques', difficulty: 'medium',
      tags: ['suites', 'géométrique', 'limite'],
      statement: `\\text{Soit la suite } (w_n) \\text{ définie par :}`,
      question: `w_n = \\dfrac{1+3+3^2+\\cdots+3^n}{2 \\cdot 3^n - 1} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim w_n = \\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `\\lim w_n = \\dfrac{3}{4}`, isCorrect: true },
        { id: 'C', latex: `\\lim w_n = \\dfrac{3}{2}`, isCorrect: false },
        { id: 'D', latex: `\\lim w_n = 1`, isCorrect: false },
      ],
      solution: [
        `\\text{Numérateur : } \\sum_{k=0}^n 3^k = \\dfrac{3^{n+1}-1}{3-1} = \\dfrac{3^{n+1}-1}{2}`,
        `w_n = \\dfrac{3^{n+1}-1}{2(2 \\cdot 3^n-1)} = \\dfrac{3 \\cdot 3^n - 1}{4 \\cdot 3^n - 2}`,
        `\\text{On divise par } 3^n : \\quad \\dfrac{3 - 3^{-n}}{4 - 2 \\cdot 3^{-n}} \\xrightarrow[n\\to+\\infty]{}`,
        `\\boxed{\\lim w_n = \\dfrac{3}{4}}`,
      ],
    },
    {
      number: 2, exercise: 2, topic: 'Suites numériques', difficulty: 'medium',
      tags: ['suites', 'logarithme'],
      statement: `(t_n) \\text{ est définie par :}`,
      question: `\\ln(2^n \\cdot t_n) = 3n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(t_n) \\text{ est géom. de raison } \\dfrac{e^3}{2}`, isCorrect: true },
        { id: 'B', latex: `(t_n) \\text{ est arith. de raison } \\dfrac{e^3}{2}`, isCorrect: false },
        { id: 'C', latex: `(t_n) \\text{ est géom. de raison } \\dfrac{e^2}{3}`, isCorrect: false },
        { id: 'D', latex: `(t_n) \\text{ est arith. de raison } 3-\\ln 2`, isCorrect: false },
      ],
      solution: [
        `n\\ln 2 + \\ln t_n = 3n \\implies \\ln t_n = 3n - n\\ln 2 = n(3-\\ln 2)`,
        `t_n = e^{n(3-\\ln 2)} = \\left(e^{3-\\ln 2}\\right)^n = \\left(\\dfrac{e^3}{e^{\\ln 2}}\\right)^{\\!n}`,
        `\\boxed{t_n = \\left(\\dfrac{e^3}{2}\\right)^{\\!n} \\text{ — géométrique de raison } \\dfrac{e^3}{2}}`,
      ],
    },
    {
      number: 3, exercise: 3, topic: 'Nombres complexes', difficulty: 'hard',
      tags: ['complexes', 'argument'],
      statement: `\\text{On considère :}`,
      question: `z = e^{i\\frac{\\pi}{3}} \\;,\\quad w = (1-i)\\bar{z} \\quad \\text{Trouver } \\arg(w)`,
      choices: [
        { id: 'A', latex: `\\arg(w) = \\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'B', latex: `\\arg(w) = -\\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'C', latex: `\\arg(w) = -\\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: true },
        { id: 'D', latex: `\\arg(w) = \\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: false },
      ],
      solution: [
        `\\bar{z} = e^{-i\\frac{\\pi}{3}}`,
        `1-i = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}}`,
        `w = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}} \\cdot e^{-i\\frac{\\pi}{3}} = \\sqrt{2}\\,e^{-i(\\frac{\\pi}{4}+\\frac{\\pi}{3})}`,
        `\\boxed{\\arg(w) = -\\tfrac{3\\pi+4\\pi}{12} = -\\tfrac{7\\pi}{12}}`,
      ],
    },
    {
      number: 4, exercise: 4, topic: 'Nombres complexes', difficulty: 'medium',
      tags: ['complexes', 'rotation'],
      statement: `z_A = 3-2i,\\; z_B = 1+i,\\; A' = R(B, -\\tfrac{\\pi}{2})(A)`,
      question: `z_{A'} = \\;?`,
      choices: [
        { id: 'A', latex: `z_{A'} = 4 + 4i`, isCorrect: false },
        { id: 'B', latex: `z_{A'} = -2 + 3i`, isCorrect: false },
        { id: 'C', latex: `z_{A'} = -2 - i`, isCorrect: true },
        { id: 'D', latex: `z_{A'} = 4 + 3i`, isCorrect: false },
      ],
      solution: [
        `z_{A'}-z_B = e^{-i\\frac{\\pi}{2}}(z_A-z_B)`,
        `z_A-z_B = (3-2i)-(1+i) = 2-3i`,
        `e^{-i\\frac{\\pi}{2}} = -i \\implies -i(2-3i) = -2i+3i^2 = -3-2i`,
        `\\boxed{z_{A'} = (1+i)+(-3-2i) = -2-i}`,
      ],
    },
    {
      number: 5, exercise: 5, topic: 'Intégrales', difficulty: 'medium',
      tags: ['intégrales', 'trigonométrie'],
      statement: `\\text{Calculer :}`,
      question: `K = \\int_0^{\\frac{\\pi}{4}} \\tan(x)\\,dx`,
      choices: [
        { id: 'A', latex: `K = \\ln 2`, isCorrect: false },
        { id: 'B', latex: `K = \\dfrac{1}{2}\\ln 2`, isCorrect: true },
        { id: 'C', latex: `K = 2\\ln 2`, isCorrect: false },
        { id: 'D', latex: `K = -\\ln 2`, isCorrect: false },
      ],
      solution: [
        `K = \\Big[-\\ln|\\cos x|\\Big]_0^{\\pi/4}`,
        `= -\\ln\\!\\left(\\cos\\tfrac{\\pi}{4}\\right) + \\ln(\\cos 0)`,
        `= -\\ln\\tfrac{\\sqrt{2}}{2} + 0 = \\ln\\tfrac{2}{\\sqrt{2}} = \\ln\\sqrt{2}`,
        `\\boxed{K = \\tfrac{1}{2}\\ln 2}`,
      ],
    },
    {
      number: 6, exercise: 6, topic: 'Intégrales', difficulty: 'hard',
      tags: ['intégrales', 'impropre'],
      statement: `\\text{Pour } \\mu \\in\\,]0,1[\\, \\text{ on pose :}`,
      question: `J(\\mu) = \\int_\\mu^1 \\ln(x)\\,dx \\quad \\lim_{\\mu \\to 0^+} J(\\mu) = \\;?`,
      choices: [
        { id: 'A', latex: `\\lim J(\\mu) = -1`, isCorrect: true },
        { id: 'B', latex: `\\lim J(\\mu) = 0`, isCorrect: false },
        { id: 'C', latex: `\\lim J(\\mu) = 1`, isCorrect: false },
        { id: 'D', latex: `\\lim J(\\mu) = -\\infty`, isCorrect: false },
      ],
      solution: [
        `J(\\mu) = \\Big[x\\ln x - x\\Big]_\\mu^1 = (1 \\cdot 0 - 1)-(\\mu\\ln\\mu - \\mu)`,
        `= -1 - \\mu\\ln\\mu + \\mu`,
        `\\lim_{\\mu\\to 0^+} \\mu\\ln\\mu = 0 \\quad \\text{et} \\quad \\lim \\mu = 0`,
        `\\boxed{\\lim_{\\mu\\to 0^+} J(\\mu) = -1}`,
      ],
    },
    {
      number: 7, exercise: 7, topic: 'Analyse de fonctions', difficulty: 'hard',
      tags: ['fonctions', 'branche parabolique'],
      statement: `\\text{Soit } g(x) = x\\,e^x - 2x + 1 \\text{ sur } \\mathbb{R}`,
      question: `\\text{Comportement de } (C_g) \\text{ en } +\\infty \\text{ :}`,
      choices: [
        { id: 'A', latex: `\\text{Asymptote oblique } y = -2x+1`, isCorrect: false },
        { id: 'B', latex: `\\text{Asymptote horizontale } y = 1`, isCorrect: false },
        { id: 'C', latex: `\\text{BP direction axe } Ox`, isCorrect: false },
        { id: 'D', latex: `\\text{BP direction axe } Oy`, isCorrect: true },
      ],
      solution: [
        `\\dfrac{g(x)}{x} = e^x - 2 + \\dfrac{1}{x}`,
        `\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = +\\infty \\quad \\text{car } e^x \\text{ domine}`,
        `\\boxed{(C_g) \\text{ admet une BP de direction l'axe } Oy}`,
      ],
    },
    {
      number: 8, exercise: 8, topic: 'Analyse de fonctions', difficulty: 'hard',
      tags: ['fonctions', 'convexité', 'image'],
      statement: `h(x) = e^x + x(\\ln x + 1 - e) \\text{ sur } ]0,+\\infty[,\\; h(0)=1`,
      question: `h'(x)=e^x+\\ln x+2-e,\\; h''(x)=e^x+\\tfrac{1}{x}>0 \\quad h(]0,+\\infty[) = \\;?`,
      choices: [
        { id: 'A', latex: `h(]0,+\\infty[) = [1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `h(]0,+\\infty[) = ]0,+\\infty[`, isCorrect: false },
        { id: 'C', latex: `h(]0,+\\infty[) = [2-e,+\\infty[`, isCorrect: true },
        { id: 'D', latex: `h(]0,+\\infty[) = \\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        `h'' > 0 \\implies h' \\text{ strictement croissante}`,
        `h'(1) = e+0+2-e = 2 > 0 \\quad \\text{Il existe } x_0 < 1 \\text{ tel que } h'(x_0)=0`,
        `h(1) = e + 1\\cdot(0+1-e) = 1 \\quad \\text{et} \\quad h(x_0) = 2-e \\text{ (minimum)}`,
        `\\boxed{h(]0,+\\infty[) = [2-e,+\\infty[}`,
      ],
    },
  ],
}

export function getRevisionData(year: number): ExamData | undefined {
  if (year === 2024) return REVISION_2024
  return undefined
}
